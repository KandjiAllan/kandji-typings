/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * AirPlay Security settings
 */
export interface ComAppleAirplaySecurity {
  /**
   * The security policy for AirPlay.
   * 'PASSCODE_ONCE' requires an onscreen passcode on first connection from a device. Subsequent connections from the same device aren't prompted.
   * 'PASSCODE_ALWAYS' requires an onscreen passcode for every AirPlay connection. After an AirPlay connection ends, reconnecting within 30 seconds is allowed without a password.
   *
   * 'PASSWORD' requires a passphrase as specified in the 'Password' key.
   *
   * 'NONE' was deprecated in tvOS 11.3. Existing profiles using 'NONE' get the 'PASSWORD_ONCE' behavior.
   */
  SecurityType: "PASSCODE_ONCE" | "PASSCODE_ALWAYS" | "PASSWORD";
  /**
   * The access policy for AirPlay.
   * 'ANY' allows connections from both Ethernet/WiFi and Apple Wireless Direct Link.
   * 'WIFI_ONLY' allows connections only from devices on the same Ethernet/WiFi network as Apple TV.
   */
  AccessType: "ANY" | "WIFI_ONLY";
  /**
   * The AirPlay password; required if SecurityType is 'PASSWORD'.
   */
  Password?: string;
}
