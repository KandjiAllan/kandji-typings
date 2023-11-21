/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * Use this section to define settings to have an ACME server issue a client certificate.
 */
export interface ComAppleSecurityAcme {
  /**
   * The directory URL of the ACME server. The URL must use the https scheme.
   */
  DirectoryURL: string;
  /**
   * A unique string identifying a specific device. The server may use this as a nonce to prevent issuing multiple certificates. This identifier also indicates to the ACME server that the device has access to a valid client identifier issued by the enterprise infrastructure. This can help the ACME server determine whether to trust the device. Though this is a relatively weak indication because of the risk that an attacker can intercept the client identifier.
   */
  ClientIdentifier: string;
  /**
   * The valid values for 'KeySize' depend on the values of 'KeyType' and 'HardwareBound'. See those keys for specific requirements.
   */
  KeySize: number;
  /**
   * The type of key pair to generate.
   * * 'RSA': Specifies an RSA key pair. RSA key pairs must have a KeySize in the range [1024..4096] inclusive and a multiple of 8, and 'HardwareBound' must be false.
   * * 'ECSECPrimeRandom': Specifies a key pair on the P-192, P-256, P-384 or P-521 curves as defined in FIPS Pub 186-4. KeySize defines the particular curve, which must be 192, 256, 384 or 521. Hardware bound keys only support values of 256 and 384. Note that the key size is 521, not 512, even though the other key sizes are multiples of 64.
   */
  KeyType: "RSA" | "ECSECPrimeRandom";
  /**
   * If 'false', the private key isn't bound to the device.
   * If 'true', the private key is bound to the device. The Secure Enclave generates the key pair, and the private key is cryptographically entangled with a system key. This prevents the system from exporting the private key.
   * If 'true', 'KeyType' must be 'ECSECPrimeRandom' and 'KeySize' must be 256 or 384.
   * This key is supported as of macOS 14 on Apple Silicon and Intel devices that have a T2 chip. Older macOS versions or other Mac devices require this key but it must have a value of 'false'.
   */
  HardwareBound: boolean;
  /**
   * The device requests this subject for the certificate that the ACME server issues. The ACME server may override or ignore this field in the certificate it issues.
   * The representation of a X.500 name represented as an array of OID and value. For example, /C=US/O=Apple Inc./CN=foo/1.2.5.3=bar corresponds to:
   * [ [ [”C”, “US”] ], [ [”O”, “Apple Inc.”] ], ..., [ [ “1.2.5.3”, “bar” ] ] ]
   * Dotted numbers can represent OIDs , with shortcuts for country (C), locality (L), state (ST), organization (O), organizational unit (OU), and common name (CN).
   */
  Subject: string[][][];
  /**
   * The Subject Alt Name that the device requests for the certificate that the ACME server issues. The ACME server may override or ignore this field in the certificate it issues.
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
   * This value is a bit field.
   * * Bit '0x01' indicates digital signature.
   * * Bit '0x04' indicates encryption.
   * The device requests this key for the certificate that the ACME server issues. The ACME server may override or ignore this field in the certificate it issues.
   */
  UsageFlags?: number;
  /**
   * The value is an array of strings. Each string is an OID in dotted notation. For instance, [”1.3.6.1.5.5.7.3.2”, “1.3.6.1.5.5.7.3.4”] indicates client authentication and email protection.
   * The device requests this field for the certificate that the ACME server issues. The ACME server may override or ignore this field in the certificate it issues.
   */
  ExtendedKeyUsage?: string[];
  /**
   * If 'true', the device provides attestations describing the device and the generated key to the ACME server. The server can use the attestations as strong evidence that the key is bound to the device, and that the device has properties listed in the attestation. The server can use that as part of a trust score to decide whether to issue the requested certificate.
   * When 'Attest' is 'true', 'HardwareBound' must also be 'true'.
   * This key is supported as of macOS 14 on Apple Silicon and Intel devices that have a T2 chip. If this key is specified for older macOS versions or other Mac devices, it must have a value of 'false'.
   */
  Attest?: boolean;
  /**
   * If true, the private key of the identity obtained via SCEP should be tagged as “non-extractable” in the keychain.
   */
  KeyIsExtractable?: boolean;
  /**
   * If 'true', all apps have access to the private key.
   */
  AllowAllAppsAccess?: boolean;
}