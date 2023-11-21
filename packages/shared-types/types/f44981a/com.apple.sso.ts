/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleSso {
  /**
   * The human-readable name for the account.
   */
  Name: string;
  /**
   * The Kerberos dictionary.
   */
  Kerberos?: {
    /**
     * The principal name. If not provided, the user will be prompted for one during profile installation. This field is required for MDM installation.
     */
    PrincipalName?: string;
    /**
     * The 'PayloadUUID' of an identity certificate payload that can be used to renew the Kerberos credential without user interaction. The certificate payload must have either the 'com.apple.security.pkcs12' or 'com.apple.security.scep' payload type. Both the Single Sign On payload and the identity certificate payload must be included in the same configuration profile.
     */
    PayloadCertificateUUID?: string;
    /**
     * The realm name. This value should be properly capitalized.
     */
    Realm: string;
    /**
     * The list of URL prefixes that must be matched in order to use this account for Kerberos authentication over HTTP. If this key is missing, the account will be eligible to match all 'http://' and 'https://' URLs.
     * The URL matching patterns must begin with either 'http://' or 'https://'. A simple string match is performed, so the URL prefix 'http://www.apple.com/' will not match 'http://www.apple.com:80/'. However, if a matching pattern does not end in '/', a '/' will be appended to it.
     */
    URLPrefixMatches?: string[];
    /**
     * The list of app identifiers that are allowed to use this login. If this field missing, this login will match all app identifiers.
     * This array may not be empty.
     * This array must contain strings that match App Bundle IDs. These strings may be exact matches, e.g. 'com.mycompany.myapp' or may specify a prefix match on the Bundle ID by using the '*' wildcard character. The wildcard character must appear after a period character ('.'), and may only appear once, at the end of the string, e.g. 'com.mycompany.*'. When a wildcard is given, any app whose Bundle ID begins with the prefix will be granted access to the account.
     */
    AppIdentifierMatches?: string[];
  };
}