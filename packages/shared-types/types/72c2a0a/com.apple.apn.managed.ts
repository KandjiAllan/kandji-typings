/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleApnManaged {
  /**
   * The list of access point names (APNs).
   */
  DefaultsData: {
    /**
     * An array of APN dictionaries (`APN.DefaultsData.Apns`).
     */
    apns: {
      /**
       * This string specifies the Access Point Name.
       */
      apn: string;
      /**
       * This string specifies the user name for this APN. If it is missing, the device prompts for it during profile installation.
       */
      username?: string;
      /**
       * This data represents the password for the user for this APN. For obfuscation purposes, the password is encoded. If it is missing from the payload, the device prompts for the password during profile installation.
       */
      password?: string;
      /**
       * The IP address or URL of the APN proxy.
       */
      proxy?: string;
      /**
       * The port number of the APN proxy.
       */
      proxyPort?: number;
    }[];
  };
  /**
   * The domain name.
   */
  DefaultsDomainName: "com.apple.managedCarrier";
}
