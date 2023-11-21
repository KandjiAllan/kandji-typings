/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleSetupAssistantManaged {
  /**
   * If 'true', the system skips the Apple ID setup window.
   */
  SkipCloudSetup?: boolean;
  /**
   * If 'true', the system skips the Siri setup window.
   */
  SkipSiriSetup?: boolean;
  /**
   * If 'true', the system skips the Privacy consent window.
   */
  SkipPrivacySetup?: boolean;
  /**
   * If 'true', the system skips the iCloud Storage window.
   */
  SkipiCloudStorageSetup?: boolean;
  /**
   * If 'true', the system skips the True Tone Display window.
   */
  SkipTrueTone?: boolean;
  /**
   * If 'true', the system skips the Choose Your Look window.
   */
  SkipAppearance?: boolean;
  /**
   * If 'true', the system skips the Touch ID setup window.
   */
  SkipTouchIDSetup?: boolean;
  /**
   * If 'true', the system skips the Screen Time window.
   */
  SkipScreenTime?: boolean;
  /**
   * If 'true', the system skips the Accessibility window.
   */
  SkipAccessibility?: boolean;
  /**
   * An array strings describing setup items to skip. SkipKeys provides a list of valid strings and their meanings.
   * Available in iOS 14 and later.
   */
  SkipSetupItems?: string[];
  /**
   * If 'true', the system skips the Unlock With Apple Watch window.
   */
  SkipUnlockWithWatch?: boolean;
}
