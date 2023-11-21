/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * Use this configuration to define settings for a subscribed calendar.
 */
export interface AccountSubscribedCalendar {
  /**
   * The name that apps show to the user for this calendar account. If not present, the system generates a suitable default.
   */
  VisibleName?: string;
  /**
   * The URL of the subscribed calendar, which needs to start with 'https://'.
   */
  CalendarURL: string;
  /**
   * The identifier of an asset declaration that contains the credentials for this account to authenticate with a calendar server. Set the corresponding asset type to 'CredentialUserNameAndPassword'.
   */
  AuthenticationCredentialsAssetReference?: string;
}
