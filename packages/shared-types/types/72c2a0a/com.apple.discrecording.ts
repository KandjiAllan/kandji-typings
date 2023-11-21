/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleDiscRecording {
  /**
   * If 'off', disables disc burning.
   *
   * If 'on', allows normal default operation. Setting this key to 'on' doesn't enable disc burn support if it has already been disabled by other mechanisms or preferences. It also must be enabled with the Finder profile.
   *
   * If 'authenticate', requires authentication.
   */
  BurnSupport: "off" | "authenticate" | "on";
}
