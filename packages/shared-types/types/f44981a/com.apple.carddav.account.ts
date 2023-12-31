/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * Use this section to define settings for configuration access to CardDAV servers.
 */
export interface ComAppleCarddavAccount {
  /**
   * The description of the account.
   */
  CardDAVAccountDescription?: string;
  /**
   * The server's address.
   */
  CardDAVHostName: string;
  /**
   * The user name for logins.
   */
  CardDAVUsername?: string;
  /**
   * The user's password.
   */
  CardDAVPassword?: string;
  /**
   * The base URL to the user's address book.
   */
  CardDAVPrincipalURL?: string;
  /**
   * If 'true', enables SSL.
   */
  CardDAVUseSSL?: boolean;
  /**
   * The server's port.
   */
  CardDAVPort?: number;
  /**
   * An array of communication service rules for this account.
   */
  CommunicationServiceRules?: {
    /**
     * A dictionary of service handlers for contacts from this account.
     */
    DefaultServiceHandlers?: {
      /**
       * A string containing the bundle identifier for the default application that handles audio calls made to contacts from this account.
       */
      AudioCall?: string;
    };
  };
  /**
   * The VPNUUID of the per-app VPN the account uses for network communication.
   * Available in iOS 14 and later.
   */
  VPNUUID?: string;
}
