/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * This command allows the server to set settings on the device.
 */
export interface SettingsCommand {
  PayloadKeys?: {
    /**
     * An array of dictionaries that contains the settings.
     */
    Settings?: {
      /**
       * Sets various accessibility settings. The system allows only keys with explicitly provided values.
       */
      Item: "AccessibilitySettings";
      /**
       * If 'true', the system enables bold text.
       */
      BoldTextEnabled?: boolean;
      /**
       * If 'true', the system enables increase contrast.
       */
      IncreaseContrastEnabled?: boolean;
      /**
       * If 'true', the system enables reduced motion.
       */
      ReduceMotionEnabled?: boolean;
      /**
       * If 'true', the system enables reduced transparency.
       */
      ReduceTransparencyEnabled?: boolean;
      /**
       * The accessibility text size apps that support dynamic text use. '0' is the smallest value, and '11' is the largest available.
       */
      TextSize?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
      /**
       * If 'true', the system enables touch accommodations.
       */
      TouchAccommodationsEnabled?: boolean;
      /**
       * If 'true', the system enables voiceover.
       */
      VoiceOverEnabled?: boolean;
      /**
       * If 'true', the system enables zoom.
       */
      ZoomEnabled?: boolean;
      /**
       * If 'true', the system enables grayscale display.
       */
      GrayscaleEnabled?: boolean;
    }[];
  };
  ResponseKeys?: {
    /**
     * A dictionary that describes the results of configuring settings.
     */
    Settings?: {
      /**
       * The status of the setting, which is one of the following values:
       * * 'Acknowledged': The device processed the command successfully.
       * * 'Error': An error occurred. See the 'ErrorChain' for more details.
       */
      Status: string;
      /**
       * An array of dictionaries that describes any errors that occurred.
       */
      ErrorChain?: {
        /**
         * A dictionary that contains additional details about the error.
         */
        ANY: string;
      }[];
      /**
       * The app identifier to which this error applies.
       */
      Identifier?: string;
    };
  };
}
