/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleApplicationaccessNew {
  /**
   * If 'true', enables app access restrictions.
   */
  familyControlsEnabled: boolean;
  /**
   * The allow list of app item dictionaries.
   */
  whiteList?: {
    /**
     * The bundle ID of the app.
     */
    bundleID: string;
    /**
     * The identifier of the app. Obtain this value from the Security framework using SecCodeCopyDesignatedRequirement.
     */
    appID: string;
    /**
     * The signature for an unsigned binary.
     */
    detachedSignature?: string;
    /**
     * If 'true', this app isn't added to the allow list.
     */
    disabled?: boolean;
    /**
     * An array of nested helper applications.
     */
    subApps?: unknown[];
    /**
     * The name used for display purposes.
     */
    displayName?: string;
  }[];
  /**
   * The paths to apps in the deny list. This property is deprecated in macOS 10.15 and later.
   */
  pathBlackList?: string[];
  /**
   * The paths to apps in the allow list. This property is deprecated in macOS 10.15 and later.
   */
  pathWhiteList?: string[];
}
