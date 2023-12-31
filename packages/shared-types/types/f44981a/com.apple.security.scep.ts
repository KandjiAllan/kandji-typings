/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * Use this section to define settings for configuration access to SCEP servers.
 */
export interface ComAppleSecurityScep {
  /**
   * An array of payload dictionaries. This array isn't present if 'IsEncrypted' is 'true'.
   */
  PayloadContent: {
    /**
     * The SCEP URL. See Over-the-Air Profile Delivery and Configuration for more information about SCEP.
     */
    URL: string;
    /**
     * A string that's understood by the SCEP server; for example, a domain name like example.org. If a certificate authority has multiple CA certificates, this field can be used to distinguish which is required.
     */
    Name?: string;
    /**
     * The representation of an X.500 name as an array of OID and value.
     * For example, '/C=US/O=Apple Inc./CN=foo/1.2.5.3=bar' translates to '[ [ [“C”, “US”] ], [ [“O”, “Apple Inc.'] ], …, [ [ “1.2.5.3”, “bar” ] ] ]'.
     *
     * OIDs can be represented as dotted numbers, with shortcuts for country (C), locality (L), state (ST), organization (O), organizational unit (OU), and common name (CN).
     */
    Subject?: string[][][];
    /**
     * A preshared secret.
     */
    Challenge?: string;
    /**
     * The key size, in bits.
     */
    Keysize?: 1024 | 2048 | 4096;
    /**
     * Always 'RSA'.
     */
    "Key Type"?: string;
    /**
     * A bitmask indicating the use of the key.
     * * 1: Signing
     * * 4: Encryption
     * Some certificate authorities, such as Windows CA, support only encryption or signing, but not both at the same time.
     */
    "Key Usage"?: number;
    /**
     * The fingerprint of the Certificate Authority certificate.
     */
    CAFingerprint?: string;
    /**
     * The number of times the device should retry if the server sends a PENDING response.
     */
    Retries?: number;
    /**
     * The number of seconds to wait between subsequent retries. The first retry is attempted without this delay.
     */
    RetryDelay?: number;
    /**
     * The SCEP payload can specify an optional 'SubjectAltName' dictionary that provides values required by the CA for issuing a certificate. You can specify a single string or an array of strings for each key. The values you specify depend on the CA you're using, but might include DNS name, URL, or email values. For an example, see Sample Configuration Profile or Over-the-Air Profile Delivery and Configuration.
     */
    SubjectAltName?: {
      /**
       * The RFC 822 (email address) string.
       */
      rfc822Name?: string;
      /**
       * The DNS name.
       */
      dNSName?: string;
      /**
       * The Uniform Resource Identifier.
       */
      uniformResourceIdentifier?: string;
      /**
       * The NT principal name.
       */
      ntPrincipalName?: string;
    };
    /**
     * If 'false', disables exporting the private key from the keychain.
     */
    KeyIsExtractable?: boolean;
    /**
     * If 'true', all apps have access to the private key.
     */
    AllowAllAppsAccess?: boolean;
  };
}
