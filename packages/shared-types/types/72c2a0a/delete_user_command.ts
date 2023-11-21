/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * This command allows the server to delete a user that has an active account on the device.
 */
export interface DeleteUserCommand {
  /**
   * The user name of the account to delete.
   */
  UserName: string;
  /**
   * If 'true', the system deletes the account even if the user has data that's pending sync to the cloud. This value is available on iOS 9.3 and later.
   */
  ForceDeletion?: boolean;
  /**
   * If 'true', the system attempts to delete all users from the device. If 'ForceDeletion' is 'false', the system generates an error instead and doesn't delete users who have data that's pending sync. This value is available in iOS 14 and later.
   */
  DeleteAllUsers?: boolean;
}