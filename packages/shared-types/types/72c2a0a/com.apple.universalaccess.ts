/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleUniversalaccess {
  /**
   * The minimum zoom level in the Zoom options.
   */
  closeViewFarPoint?: number;
  /**
   * If 'true', enables 'Use keyboard shortcuts' in the Zoom options.
   */
  closeViewHotkeysEnabled?: boolean;
  /**
   * The maximum zoom level in the Zoom options.
   */
  closeViewNearPoint?: number;
  /**
   * If 'true', enables 'Use scroll gesture' in the Zoom options.
   */
  closeViewScrollWheelToggle?: boolean;
  /**
   * If 'true', enables 'Show preview rectangle' in the Zoom options. Only available in macOS 10.15 and earlier.
   */
  closeViewShowPreview?: boolean;
  /**
   * If 'true', enables 'Smooth images' in the Zoom options.
   */
  closeViewSmoothImages?: boolean;
  /**
   * The contrast value in the Display options.
   */
  contrast?: number;
  /**
   * If 'true', enables 'Flash the screen' in the Audio options.
   */
  flashScreen?: boolean;
  /**
   * If 'true', enables 'Use grayscale' in the Display options.
   * This option is deprecated in macOS 11.
   */
  grayscale?: boolean;
  /**
   * If 'true', enables Mouse Keys in the Mouse & Trackpad options.
   */
  mouseDriver?: boolean;
  /**
   * The size of the cursor.
   */
  mouseDriverCursorSize?: number;
  /**
   * If 'true', ignores the built-in trackpad.
   */
  mouseDriverIgnoreTrackpad?: boolean;
  /**
   * The initial delay before moving the mouse with Mouse Keys.
   */
  mouseDriverInitialDelay?: number;
  /**
   * The maximum speed for the cursor when using Mouse Keys.
   */
  mouseDriverMaxSpeed?: number;
  /**
   * If 'true', enables 'Slow Keys' in the Keyboard options.
   */
  slowKey?: boolean;
  /**
   * If 'true', enables 'click key sounds' for Slow Keys.
   */
  slowKeyBeepOn?: boolean;
  /**
   * The acceptance delay, in milliseconds, for Slow Keys.
   */
  slowKeyDelay?: number;
  /**
   * If 'true', plays stereo audio as mono.
   */
  stereoAsMono?: boolean;
  /**
   * If 'true', enables Sticky Keys in the Keyboard options.
   */
  stickyKey?: boolean;
  /**
   * If 'true', enables the beep when a modifier key is set for Sticky Keys.
   */
  stickyKeyBeepOnModifier?: boolean;
  /**
   * If 'true', enables 'Display pressed keys on screen' for Sticky Keys.
   */
  stickyKeyShowWindow?: boolean;
  /**
   * If 'true', enables Voice Over.
   */
  voiceOverOnOffKey?: boolean;
  /**
   * If 'true', enables Invert Colors in Display Accommodations.
   */
  whiteOnBlack?: boolean;
}
