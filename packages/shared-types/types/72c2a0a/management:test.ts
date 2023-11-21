/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * A configuration used for testing only
 */
export interface ManagementTest {
  /**
   * The string to echo back in a status response reason.
   */
  Echo: string;
  /**
   * The string to read from a data asset to echo back in status response reason description.
   */
  EchoDataAssetReference?: string;
  /**
   * The status the system reports back when the device implements the configuration. Use this to override the normal 'success' result.
   */
  ReturnStatus?: "Installed" | "Failed" | "Unlocked";
}