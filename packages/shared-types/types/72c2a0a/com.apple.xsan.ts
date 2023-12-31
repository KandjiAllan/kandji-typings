/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleXsan {
  /**
   * The name of the SAN. This key is required for all Xsan SANs. The name must exactly match the name of the SAN defined in the metadata server.
   */
  sanName: string;
  /**
   * An array of LDAP URLs where Xsan systems can obtain SAN configuration updates. This key is required for all Xsan SANs. There should be one entry for each Xsan MDC.
   *
   * Example URL: 'ldaps://mdc1.example.com:389'.
   */
  sanConfigURLs: string[];
  /**
   * An array of storage area network (SAN) File System Name Server coordinators. The list should contain the same addresses in the same order as the metadata controller (MDC) '/Library/Preferences/Xsan/fsnameservers' file.  Xsan SAN clients automatically receive updates to the 'fsnameservers' list from the SAN configuration servers whenever this list changes. StorNext administrators should update their profile whenever the 'fsnameservers' list changes.
   *
   * This key is required for StorNext SANs.
   */
  fsnameservers: string[];
  /**
   * The authentication method for the SAN. This key is required for all Xsan SANs. It's optional for StorNext SANs but should be set if the StorNext SAN uses an 'auth_secret' file.
   *
   * Only one value is accepted: 'auth_secret'
   */
  sanAuthMethod?: "auth_secret";
  /**
   * The shared secret used for Xsan network authentication. This key is required when the 'sanAuthMethod' key is present. The value should equal the content of the MDC's '/Library/Preferences/Xsan/.auth_secret' file.
   */
  sharedSecret: string;
}
