/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleSystemmigration {
  /**
   * The list of custom behavior dictionaries.
   */
  CustomBehavior?: {
    /**
     * The context that custom paths apply to.
     */
    Context: string;
    /**
     * The list of custom behavior path dictionaries.
     */
    Paths: {
      /**
       * The path to the migrating file or directory on the source system.
       */
      SourcePath: string;
      /**
       * If 'true', the source path is located within a user home directory.
       */
      SourcePathInUserHome: boolean;
      /**
       * The path to the destination file or directory on the target system.
       */
      TargetPath: string;
      /**
       * If 'true', the target path is located within a user home directory.
       */
      TargetPathInUserHome: boolean;
    }[];
  }[];
}
