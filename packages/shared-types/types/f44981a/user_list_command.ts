/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * This command allows the server to query for a list of users that have an active account on the device.
 */
export interface UserListCommand {
  PayloadKeys?: {};
  ResponseKeys?: {
    /**
     * An array of user dictionaries that contains information about the active accounts.
     */
    Users: {
      /**
       * The user name for the account. In macOS, this is the short name of the user account. This value is available in iOS 9.3 and later, and macOS 10.13 and later.
       */
      UserName: string;
      /**
       * The user's full name. This value is available in macOS 10.13 and later.
       */
      FullName: string;
      /**
       * The user's unique identifier. This value is available in macOS 10.13 and later.
       */
      UID: number;
      /**
       * The user's 'GeneratedUID'. This value is available in macOS 10.13 and later.
       */
      UserGUID: string;
      /**
       * If 'true', the user is currently logged in on the device. This value is available in iOS 9.3 and later, and macOS 10.13 and later.
       */
      IsLoggedIn: boolean;
      /**
       * If 'true', the user has data to sync to the cloud. This value is available in iOS 9.3 and later.
       */
      HasDataToSync: boolean;
      /**
       * If present, the user's data quota in bytes. This isn't present if the account doesn't enforce a quota. This value is available in iOS 9.3 and later.
       */
      DataQuota: number;
      /**
       * The amount of data, in bytes, that the user has used. This value is available in iOS 9.3 and later.
       */
      DataUsed: number;
      /**
       * If 'true', the account is a mobile account. This value is available in macOS 10.13 and later.
       */
      MobileAccount: boolean;
      /**
       * If 'true', the user currently has a secure token set. This value is available in macOS 11 and later.
       */
      HasSecureToken: boolean;
    }[];
  };
}
