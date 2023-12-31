/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleSecurityFDERecoveryRedirect {
  /**
   * The URL to which FDE recovery keys should be sent instead of to Apple. The URL must begin with https://.
   */
  RedirectURL: string;
  /**
   * The UUID of a payload within the same profile that contains a certificate used to encrypt the recovery key when it's sent to the redirected URL. The referenced payload must be of type `com.apple.security.pkcs1`.
   */
  EncryptCertPayloadUUID: string;
}
