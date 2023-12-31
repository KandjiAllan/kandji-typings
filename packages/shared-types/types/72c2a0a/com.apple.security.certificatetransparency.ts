/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * Use this section to define settings for certificate transparency.
 */
export interface ComAppleSecurityCertificatetransparency {
  /**
   * An array of certificates for which certificate transparency is disabled. For Certificate Transparency enforcement to be disabled when this policy is set, one of the following conditions must be met:
   * * The hash is of the server certificate's 'subjectPublicKeyInfo'.
   * * The hash is of a 'subjectPublicKeyInfo' that appears in a CA certificate in the certificate chain; the CA certificate is constrained through the X.509v3 'nameConstraints' extension; one or more 'directoryName' 'nameConstraints' are present in the 'permittedSubtrees;' and the 'directoryName' contains an 'organizationName' attribute.
   * * The hash is of a 'subjectPublicKeyInfo' that appears in a CA certificate in the certificate chain; the CA certificate has one or more 'organizationName' attributes in the certificate 'Subject;' and the server's certificate contains the same number of 'organizationName' attributes, in the same order, and with byte-for-byte identical values.
   */
  DisabledForCerts?: {
    /**
     * The algorithm must be 'sha256'.
     */
    Algorithm: "sha256";
    /**
     * The hash of the DER-encoding of the certificate's 'subjectPublicKeyInfo'.
     * The hash field requires the data ('subjectPublicKeyInfo' hash) in a specific format: a Base64 encoded (binary) SHA-256 hash of the certificate's public key.
     */
    Hash: string;
  }[];
  /**
   * An array of strings representing the domains to be excluded from certificate transparency enforcement. A leading period (.) is supported to signify subdomains.
   * Wildcard domains are not supported. If a leading period (.) is specified, the domain cannot be a top-level domain (for example, '.com' and '.co.uk' are disallowed).
   */
  DisabledForDomains?: string[];
}
