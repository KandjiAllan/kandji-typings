/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * Use this section to define settings for subscribed calendar account.
 */
export interface ComAppleSubscribedcalendarAccount {
  /**
   * The description of the account.
   */
  SubCalAccountDescription?: string;
  /**
   * The server's address.
   */
  SubCalAccountHostName: string;
  /**
   * The user's user name.
   */
  SubCalAccountUsername?: string;
  /**
   * The user's password.
   */
  SubCalAccountPassword?: string;
  /**
   * If 'true', enables SSL.
   */
  SubCalAccountUseSSL?: boolean;
  /**
   * The VPNUUID of the per-app VPN the account uses for network communication.
   * Available in iOS 14 and later.
   */
  VPNUUID?: string;
}