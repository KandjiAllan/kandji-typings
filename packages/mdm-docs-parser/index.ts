import { exit } from "node:process";
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { appendFileSync } from "node:fs";

import minimist from "minimist";
import logSymbols from "log-symbols";

import SchemaProvider from "./lib/SchemaProvider";
import JSONSchema from "./lib/JSONSchema";
import { TopLevel } from "./types/schema-definition/top-level";
import { FileKind } from "./lib/SchemaProvider/SchemaProvider";
import { compileFromFile } from "json-schema-to-typescript";

type CliArgs = {
  commit?: string;
  regenerate?: boolean;
  copy_to?: string;
  verbose?: boolean;
  exclude_meta?: boolean;
};

const cli = (): CliArgs => {
  const args = minimist<CliArgs>(Bun.argv, {});

  const { commit, regenerate, copy_to, exclude_meta, verbose } = args;

  return {
    commit,
    regenerate,
    copy_to,
    exclude_meta,
    verbose,
  };
};

const doesDirExist = (
  dir: string,
  autoCreate: boolean = true,
  recreate: boolean = false
) => {
  try {
    if (!fs.existsSync(dir)) {
      if (autoCreate) {
        fs.mkdirSync(dir, { recursive: true });
      }
      return false;
    } else if (recreate) {
      fs.rmSync(dir, { recursive: true, force: true });
      fs.mkdirSync(dir, { recursive: true });
    }
  } catch (e) {
    console.log(`Failed to check or create directory: ${e}`);
    if (autoCreate) {
      exit(1);
    }
  }

  return true;
};

const getOutputDir = (commit: string) => {
  return `./output/${commit}`;
};

const checkoutRevision = (commit?: string) => {
  const deviceManagementHash = execSync(
    `cd device-management && git rev-parse HEAD`
  )
    .toString()
    .trim()
    .slice(0, 7);

  console.log(`Current Device-Management Commit Hash: ${deviceManagementHash}`);

  if (commit) {
    try {
      console.log(`Checking out specified commit: ${commit}`);
      execSync(`cd device-management && git checkout ${commit}`);
    } catch (e) {
      console.error(`Failed to checkout commit: ${e}`);
      exit(1);
    }
  } else {
    try {
      console.log(`Checking out latest on device-management`);
      const latestCommit = execSync(
        `cd device-management && git checkout release && git pull && git rev-parse HEAD`
      )
        .toString()
        .trim()
        .replaceAll(/\n/g, " ")
        .split(" ")
        .at(-1)
        ?.slice(0, 7);
      if (!latestCommit) {
        console.error("Failed to checkout latest commit and get commit hash.");
        exit(1);
      }
      console.log(`Checked out latest: ${latestCommit}`);
      return latestCommit;
    } catch (e) {
      console.error(`Failed to checkout latest: ${e}`);
      exit(1);
    }
  }

  return commit.toString().trim().slice(0, 7);
};

const generateJsonSchema = async (
  commitHash: string,
  regenerate?: boolean,
  exclude_meta?: boolean,
  verbose?: boolean
) => {
  const schemaProvider = new SchemaProvider<TopLevel>("repo");
  const schemaKinds: Array<FileKind> = ["profiles", "commands", "decl-configs"];
  const results: Array<{ title: string; status: number }> = [];

  const dir = `${getOutputDir(commitHash)}/json`;
  if (doesDirExist(dir, true, regenerate)) {
    if (!regenerate) {
      console.log(`Directory -- ${dir} -- Already exists -- Not regenerating`);
      return;
    }
  }

  for (let i = 0; i < schemaKinds.length; i++) {
    const schemaFiles = await schemaProvider.get(schemaKinds[i]);
    if (!schemaFiles) {
      console.error(`Failed to grab files for ${schemaKinds[i]} .`);
      exit(1);
    }

    for (let i = 0; i < schemaFiles.length; i++) {
      const schema = await schemaProvider.readYamlFile(schemaFiles[i]);
      if (!schema) {
        console.error(`Failed to read file ${schemaFiles[i]}`);
        continue;
      }

      try {
        const jSchema = new JSONSchema(!exclude_meta);
        jSchema.convertMdmSchema(schema);

        // Use bundle id for filename, unless its invalid, then use title.
        const outFileName = (
          schema.payload?.payloadtype &&
          !schema.payload.payloadtype.startsWith(".")
            ? schema.payload.payloadtype
            : schema.title
        )
          .toLowerCase()
          .split(" ")
          .join("_");

        await jSchema.writeTo(Bun.file(`${dir}/${outFileName}.jsonc`), dir);

        results.push({ title: schema.title, status: 0 });
      } catch (e) {
        if (verbose) {
          console.error(`Failed to convert: ${schema.title} --- ${e}`);
        }
        results.push({ title: schema.title, status: 1 });
      }
    }
  }

  if (verbose) {
    results.map(({ title, status }) =>
      console.log(`${title}: ${status ? logSymbols.error : logSymbols.success}`)
    );
  }

  const hasErrors = results.some(({ status }) => status);
  console.log(
    `${(hasErrors ? logSymbols.warning : logSymbols.success).repeat(
      3
    )} JSON Schema parsing ${(hasErrors
      ? logSymbols.warning
      : logSymbols.success
    ).repeat(3)}`
  );
};

const generateTypings = async (
  commitHash: string,
  regenerate?: boolean,
  verbose?: boolean
) => {
  const schemaDir = `${getOutputDir(commitHash)}/json`;
  const dir = `${getOutputDir(commitHash)}/ts`;
  if (doesDirExist(dir, true, regenerate)) {
    if (!regenerate) {
      console.log(`Directory -- ${dir} -- Already exists -- Not regenerating`);
      return;
    }
  }

  const jsonSchemas = await SchemaProvider.getFiles(schemaDir);
  if (!jsonSchemas) {
    console.error("Failed to get json schemas for generating types.");
    exit(1);
  }

  const results: Array<{ title: string; status: number }> = [];
  for (let i = 0; i < jsonSchemas.length; i++) {
    const outFileName = path.basename(
      jsonSchemas[i],
      path.extname(jsonSchemas[i])
    );
    try {
      const compiledTs = await compileFromFile(jsonSchemas[i], {
        bannerComment:
          "/* eslint-disable */\n/**\n* This file was automatically generated by mdm-docs-parser.\n* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,\n* and run mdm-docs-parser:generate to regenerate this file.\n*/",
      });
      await Bun.write(Bun.file(`${dir}/${outFileName}.ts`), compiledTs);
      results.push({ title: outFileName, status: 0 });
    } catch (e) {
      if (verbose) {
        console.error(`Failed to generate typing for ${jsonSchemas[i]}: ${e}`);
      }
      results.push({ title: outFileName, status: 1 });
    }
  }

  if (verbose) {
    results.map(({ title, status }) =>
      console.log(`${title}: ${status ? logSymbols.error : logSymbols.success}`)
    );
  }

  const hasErrors = results.some(({ status }) => status);
  console.log(
    `${(hasErrors ? logSymbols.warning : logSymbols.success).repeat(
      3
    )} Typescript generation ${(hasErrors
      ? logSymbols.warning
      : logSymbols.success
    ).repeat(3)}`
  );
};

const copyTypingsOut = async (
  rootOutDir: string,
  commitHash: string,
  fromDir: string,
  regenerate?: boolean
) => {
  const outDir = `${rootOutDir}/${commitHash}`;
  if (doesDirExist(outDir, true, regenerate)) {
    if (!regenerate) {
      console.log(
        `Directory -- ${outDir} -- Already exists -- Not regenerating`
      );
      return;
    }
  }

  const outFiles = await SchemaProvider.getFiles(fromDir);
  if (!outFiles) {
    console.error("Failed to get files for copying out.");
    exit(1);
  }

  for (let i = 0; i < outFiles.length; i++) {
    const outFileName = path.basename(outFiles[i]);
    try {
      await Bun.write(
        Bun.file(`${outDir}/${outFileName}`),
        Bun.file(outFiles[i])
      );
    } catch (e) {
      console.error(`Failed to copy ${outFileName}: ${e}`);
    }
  }

  const rootIndexFile = `${rootOutDir}/index.ts`;
  const indexFile = `${outDir}/index.ts`;
  if (await Bun.file(indexFile).exists()) {
    fs.unlinkSync(indexFile);
  }
  for (let i = 0; i < outFiles.length; i++) {
    const fileNameNoExt = path.basename(outFiles[i], path.extname(outFiles[i]));
    const template = `export * from "./${fileNameNoExt}";\n`;
    appendFileSync(indexFile, template);
  }

  const rootTemplate = `export * from "./${commitHash}";\n`;
  appendFileSync(rootIndexFile, rootTemplate);
};

// Main --
const args = cli();
const commitHash = checkoutRevision(args.commit);
await generateJsonSchema(
  commitHash,
  args.regenerate,
  args.exclude_meta,
  args.verbose
);
await generateTypings(commitHash, args.regenerate, args.verbose);
if (args.copy_to) {
  await copyTypingsOut(
    `${args.copy_to}`,
    commitHash,
    `${getOutputDir(commitHash)}/ts`,
    args.regenerate
  );
}
