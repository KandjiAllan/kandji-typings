/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleSecurityFDERecoveryKeyEscrow {
  /**
   * The description of the location where the recovery key will be escrowed. This text will be inserted into the message the user sees when enabling FileVault.
   */
  Location: string;
  /**
   * The UUID of a payload within the same profile that contains the certificate that will be used to encrypt the recovery key. The referenced payload must be of type 'com.apple.security.pkcs1'.
   */
  EncryptCertPayloadUUID: string;
  /**
   * The string that's included in help text if the user appears to have forgotten the password. Site admins can use this key to look up the escrowed key for the particular computer.
   *
   * This key replaces the 'RecordNumber' key used in the previous escrow mechanism. If the key is missing, the device serial number is used instead.
   */
  DeviceKey?: string;
}
