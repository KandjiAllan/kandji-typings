/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * App Lock (Supervised Only)
 */
export interface ComAppleAppLock {
  /**
   * A dictionary that contains information about the app.
   */
  App: {
    /**
     * The app's bundle identifier.
     */
    Identifier: string;
    /**
     * A dictionary of options that the user cannot change.
     */
    Options?: {
      /**
       * If 'true', disables the touch screen. In tvOS, it disables the touch surface on the Apple TV Remote.
       */
      DisableTouch?: boolean;
      /**
       * If 'true', disables device rotation sensing.
       */
      DisableDeviceRotation?: boolean;
      /**
       * If 'true', disables the volume buttons.
       */
      DisableVolumeButtons?: boolean;
      /**
       * If 'true', disables the ringer switch. When disabled, the ringer behavior depends on what position the switch was in when it was first disabled.
       */
      DisableRingerSwitch?: boolean;
      /**
       * If 'true', disables the sleep/wake button.
       */
      DisableSleepWakeButton?: boolean;
      /**
       * If 'true', the device doesn't automatically go to sleep after an idle period.
       */
      DisableAutoLock?: boolean;
      /**
       * If 'true', enables VoiceOver.
       */
      EnableVoiceOver?: boolean;
      /**
       * If 'true', enables Zoom.
       */
      EnableZoom?: boolean;
      /**
       * If 'true', enables Invert Colors.
       */
      EnableInvertColors?: boolean;
      /**
       * If 'true', enables AssistiveTouch.
       */
      EnableAssistiveTouch?: boolean;
      /**
       * If 'true', enables Speak Selection.
       */
      EnableSpeakSelection?: boolean;
      /**
       * If 'true', enables Mono Audio.
       */
      EnableMonoAudio?: boolean;
      /**
       * If 'true', enables Voice Control.
       */
      EnableVoiceControl?: boolean;
    };
    /**
     * A dictionary of user-editable options.
     */
    UserEnabledOptions?: {
      /**
       * If 'true', allows the user to toggle Voice Control.
       */
      VoiceControl?: boolean;
      /**
       * If 'true', allows the user to toggle VoiceOver.
       */
      VoiceOver?: boolean;
      /**
       * If 'true', allows the user to toggle Zoom.
       */
      Zoom?: boolean;
      /**
       * If 'true', allows the user to toggle Invert Colors.
       */
      InvertColors?: boolean;
      /**
       * If 'true', allows the user to toggle AssistiveTouch.
       */
      AssistiveTouch?: boolean;
    };
  };
}