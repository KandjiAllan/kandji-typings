/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleScreensaver {
  /**
   * If 'true', the user is prompted for a password when the screen saver is unlocked or stopped. When you use this prompt, you must also provide 'askForPasswordDelay'. Available in macOS 10.13 and later.
   */
  askForPassword?: boolean;
  /**
   * The number of seconds to delay before the password will be required to unlock or stop the screen saver (the grace period). A value of '2147483647' (for example, '0x7FFFFFFF') disables this requirement. To use this option, you must set 'askForPassword' to 'true'. Available in macOS 10.13 and later.
   */
  askForPasswordDelay?: number;
  /**
   * The number of seconds of inactivity before the screen saver activates (0 = Never activate).
   */
  loginWindowIdleTime?: number;
  /**
   * The full path to the screen-saver module to use.
   */
  loginWindowModulePath?: string;
  /**
   * The name of the screen saver module.
   */
  moduleName: string;
}
