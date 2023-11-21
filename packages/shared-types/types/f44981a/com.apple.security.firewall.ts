/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleSecurityFirewall {
  /**
   * If 'true', enables the firewall.
   */
  EnableFirewall: boolean;
  /**
   * If 'true', enables blocking of all incoming connections.
   */
  BlockAllIncoming?: boolean;
  /**
   * If 'true', enables stealth mode.
   */
  EnableStealthMode?: boolean;
  /**
   * The list of apps with connections controlled by the firewall.
   */
  Applications?: {
    /**
     * The bundle identifier for an app.
     */
    BundleID: string;
    /**
     * If true, allows connections for the app.
     */
    Allowed: boolean;
  }[];
  /**
   * If 'true', enables logging.
   * Available in macOS 12 and later.
   */
  EnableLogging?: boolean;
  /**
   * This string specifies the type of logging.
   * Available in macOS 12 and later.
   */
  LoggingOption?: "throttled" | "brief" | "detail";
  /**
   * If 'true', allows built-in software to receive incoming connections.
   * Available in macOS 12.3 and later.
   */
  AllowSigned?: boolean;
  /**
   * If 'true', allows downloaded signed software to receive incoming connections.
   * Available in macOS 12.3 and later.
   */
  AllowSignedApp?: boolean;
}