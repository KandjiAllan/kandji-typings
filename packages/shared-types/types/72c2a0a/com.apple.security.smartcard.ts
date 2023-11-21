/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleSecuritySmartcard {
  /**
   * If 'false', users don't get the pairing dialog, although existing pairings still work.
   */
  UserPairing?: boolean;
  /**
   * If 'false', disables the SmartCard for logins, authorizations, and screen saver unlocking. It is still allowed for other functions, such as signing emails and accessing the web. A restart is required for a setting change to take effect.
   */
  allowSmartCard?: boolean;
  /**
   * Valid values are 0 to 3:
   * '0': Turns off certificate trust check.
   * '1': Turns on certificate trust check. A standard validity check is performed but doesn't include additional revocation checks.
   * '2': Turns on certificate trust check. A soft revocation check is also performed. Until the certificate is explicitly rejected by CRL/OCSP, it's considered valid. This setting means that unavailable or unreachable CRL/OCSP allow this check to succeed.
   * '3': Turns on certificate trust check. A hard revocation check is also performed. Unless CRL/OCSP explicitly says 'This certificate is OK,' it's considered invalid. This option is the most secure.
   */
  checkCertificateTrust?: 0 | 1 | 2 | 3;
  /**
   * If 'true', a user can pair with only one SmartCard, although existing pairings are allowed if already set up.
   */
  oneCardPerUser?: boolean;
  /**
   * If '1', enables the screen saver when the SmartCard is removed. Available in macOS 10.13.4 and later.
   */
  tokenRemovalAction?: 0 | 1;
  /**
   * If 'true', a user can only log in or authenticate with a SmartCard. Available in macOS 10.13.2 and later.
   */
  enforceSmartCard?: boolean;
}