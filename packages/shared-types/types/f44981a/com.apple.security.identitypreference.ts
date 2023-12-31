/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleSecurityIdentitypreference {
  /**
   * The email address (in RFC 822 format), DNS host name, or other name that uniquely identifies a service requiring this identity.
   */
  Name: string;
  /**
   * The UUID of the certificate payload within the same profile to use for the identity credential.
   */
  PayloadCertificateUUID: string;
}
