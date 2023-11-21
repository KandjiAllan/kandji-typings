/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * Use this configuration to define passcode policy settings
 */
export interface PasscodeSettings {
  /**
   * If 'true', requires the user to set a passcode without any requirements about the length or quality of the passcode. The presence of any other keys implicitly requires a passcode, and overrides this key's value.
   */
  RequirePasscode?: boolean;
  /**
   * If 'true', the passcode needs to consist of at least one alphabetic character and at least one number.
   */
  RequireAlphanumericPasscode?: boolean;
  /**
   * If 'true', requires a complex passcode. A complex passcode is one that doesn't contain repeated characters or increasing or decreasing characters (such as 123 or CBA).
   */
  RequireComplexPasscode?: boolean;
  /**
   * The minimum number of characters a passcode can contain.
   */
  MinimumLength?: number;
  /**
   * Specifies the minimum number of complex characters in the password. A complex character is a character other than a number or a letter, such as '&', '%', '$', and '#'.
   */
  MinimumComplexCharacters?: number;
  /**
   * The number of failed passcode attempts that the system allows the user before iOS erases the device or macOS locks the device. If you don't change this setting, after six failed attempts, the device imposes a time delay before the user can enter a passcode again. The time delay increases with each failed attempt.
   * After the final failed attempt, the system securely erases all data and settings from the iOS device. A macOS device locks after the final attempt. The passcode time delay begins after the sixth attempt, so if this value is six or lower, the system has no time delay and triggers the erase or lock as soon as the user exceeds the limit.
   */
  MaximumFailedAttempts?: number;
  /**
   * The number of minutes before the login is reset after the maximum number of failed attempts. Also set the 'MaximumFailedAttempts' key for this to take effect.
   */
  FailedAttemptsResetInMinutes?: number;
  /**
   * The maximum period that a user can select, during which the user can unlock the device without a passcode. A value of '0' means no grace period, and the device requires a passcode immediately. In the absence of this key, the user can select any period.
   * macOS translates this to screensaver settings.
   */
  MaximumGracePeriodInMinutes?: number;
  /**
   * The maximum period that a user can select, during which the device can be idle before the system automatically locks it. When the device reaches this limit, the device locks and the user must enter the passcode to unlock it. In the absence of this key, the user can select any period.
   * macOS translates this to screensaver settings.
   */
  MaximumInactivityInMinutes?: number;
  /**
   * Specifies the maximum number of days that the passcode can remain unchanged. After this number of days, the system forces the user to change the passcode before it unlocks the device.
   */
  MaximumPasscodeAgeInDays?: number;
  /**
   * The number of historical passcode entries the system checks when validating a new passcode. The device refuses a new passcode if it matches a previously used passcode within the specified passcode history range. In the absence of this key, the system performs no historical check.
   */
  PasscodeReuseLimit?: number;
  /**
   * If 'true', the system forces a password reset the next time the user tries to authenticate. If you set this key in a configuration in the system scope (device channel), the setting takes effect for all users, and admin authentication may fail until the admin user password is also reset.
   */
  ChangeAtNextAuth?: boolean;
  /**
   * Specifies a regular expression, and its description, to enforce password compliance. Use the simpler passcode settings whenever possible, and rely on regular expression matching only when necessary. Mistakes in regular expressions can lead to frustrating user experiences, such as unsatisfiable passcode policies, or policy descriptions that don't match the enforced policy.
   */
  CustomRegex?: {
    /**
     * A regular expression string to match against the password to determine whether it complies with a policy. The regular expression uses the ICU syntax. The string can't exceed 2048 characters in length.
     */
    Regex: string;
    /**
     * A dictionary with supported OS language IDs for the keys (such as 'en-US'), and values that represent a localized description of the policy that the regular expression enforces. Use the special 'default' key for languages that the dictionary doesn't contain.
     */
    Description?: {
      /**
       * A localized description.
       */
      ANY?: string;
    };
  };
}
