/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleDock {
  /**
   * The tile size. Values must be in the range from 16 to 128.
   */
  tilesize?: number;
  /**
   * If 'true', locks the size slider.
   */
  "size-immutable"?: boolean;
  /**
   * If 'true', enables magnification.
   */
  magnification?: boolean;
  /**
   * If 'true', locks magnification.
   */
  "magnify-immutable"?: boolean;
  /**
   * The size of the largest magnification.
   */
  largesize?: number;
  /**
   * If 'true', locks the magnification slider.
   */
  "magsize-immutable"?: boolean;
  /**
   * The orientation of the dock.
   */
  orientation?: "bottom" | "left" | "right";
  /**
   * If 'true', locks the position.
   */
  "position-immutable"?: boolean;
  /**
   * The minimize effect.
   */
  mineffect?: "genie" | "scale";
  /**
   * If 'true', locks 'Minimize windows using.'
   */
  "mineffect-immutable"?: boolean;
  /**
   * Set the 'Prefer tabs when opening documents' to the provided value.
   */
  windowtabbing?: "manual" | "always" | "fullscreen";
  /**
   * If 'true', disables 'Prefer tabs when opening documents' checkbox.
   */
  "windowtabbing-immutable"?: boolean;
  /**
   * The behavior when the window's title bar is double-clicked.
   */
  dblclickbehavior?: "minimize" | "maximize" | "none";
  /**
   * If 'true', locks 'Double-click a window's title bar.'
   */
  "dblclickbehavior-immutable"?: boolean;
  /**
   * If 'true', enables 'Minimize windows into application icon.'
   */
  "minimize-to-application"?: boolean;
  /**
   * If 'true', disables the 'Minimize windows into application icon' checkbox.
   */
  "minintoapp-immutable"?: boolean;
  /**
   * If 'true', enables 'Animate opening applications.'
   */
  launchanim?: boolean;
  /**
   * If 'true', locks 'Animate opening applications.'
   */
  "launchanim-immutable"?: boolean;
  /**
   * If 'true', enables 'Automatically hide and show the dock.'
   */
  autohide?: boolean;
  /**
   * If 'true', locks 'Automatically hide.'
   */
  "autohide-immutable"?: boolean;
  /**
   * If true, shows the process indicator.
   */
  "show-process-indicators"?: boolean;
  /**
   * If 'true', locks 'Show indicators.'
   */
  "showindicators-immutable"?: boolean;
  /**
   * If 'true', enables 'Show recent items.'
   */
  "show-recents"?: boolean;
  /**
   * If 'true', disables 'Show recent applications' checkbox.
   */
  "showrecents-immutable"?: boolean;
  /**
   * If 'true', disables changes to the dock.
   */
  "contents-immutable"?: boolean;
  /**
   * One or more special folders that may be created at user login time and placed in the dock.
   *
   * The 'My Applications' item is only used for Simple Finder environments. The 'Original Network Home' item is only used for mobile account users.
   */
  MCXDockSpecialFolders?: (
    | "AddDockMCXMyApplicationsFolder"
    | "AddDockMCXDocumentsFolder"
    | "AddDockMCXSharedFolder"
    | "AddDockMCXOriginalNetworkHomeFolder"
  )[];
  /**
   * If 'true', use the file in '/Library/Preferences/com.apple.dockfixup.plist' when a new user or migrated user logs in. This option has no effect for existing users. Available in macOS 10.12 and later. Only available on the device channel.
   */
  AllowDockFixupOverride?: boolean;
  /**
   * If 'true', uses the 'static-apps' and 'static-others' dictionaries for the dock and ignores any items in the 'persistent-apps' and 'persistent-others' dictionaries. If 'false', the contents are merged with the static items listed first.
   */
  "static-only"?: boolean;
  /**
   * An array of items located on the Documents side of the Dock and cannot be removed from that location.
   */
  "static-others"?: {
    /**
     * The information about the dock item.
     */
    "tile-data": {
      /**
       * The label of the dock item.
       */
      label: string;
      /**
       * The URL string.
       */
      url?: string;
      /**
       * The type of tile:
       * * '0': URL
       * * '1': File
       * * '3': Directory
       */
      "file-type": 0 | 1 | 3;
      /**
       * The data in a file. For Apple use only.
       */
      "file-data"?: {
        /**
         * For Apple use only.
         */
        ANY?: string;
      };
    };
    /**
     * The type of tile.
     */
    "tile-type": "file-tile" | "directory-tile" | "url-tile";
  }[];
  /**
   * An array of items located on the Applications side of the Dock and cannot be removed from that location.
   */
  "static-apps"?: {
    /**
     * The information about the dock item.
     */
    "tile-data": {
      /**
       * The label of the dock item.
       */
      label: string;
      /**
       * The URL string.
       */
      url?: string;
      /**
       * The type of tile:
       * * '0': URL
       * * '1': File
       * * '3': Directory
       */
      "file-type": 0 | 1 | 3;
      /**
       * The data in a file. For Apple use only.
       */
      "file-data"?: {
        /**
         * For Apple use only.
         */
        ANY?: string;
      };
    };
    /**
     * The type of tile.
     */
    "tile-type": "file-tile" | "directory-tile" | "url-tile";
  }[];
  /**
   * An array of items located on the Applications side of the Dock that can be removed from the dock.
   */
  "persistent-apps"?: {
    /**
     * The information about the dock item.
     */
    "tile-data": {
      /**
       * The label of the dock item.
       */
      label: string;
      /**
       * The URL string.
       */
      url?: string;
      /**
       * The type of tile:
       * * '0': URL
       * * '1': File
       * * '3': Directory
       */
      "file-type": 0 | 1 | 3;
      /**
       * The data in a file. For Apple use only.
       */
      "file-data"?: {
        /**
         * For Apple use only.
         */
        ANY?: string;
      };
    };
    /**
     * The type of tile.
     */
    "tile-type": "file-tile" | "directory-tile" | "url-tile";
  }[];
  /**
   * An array of items located on the Documents side of the Dock that can be removed from the dock.
   */
  "persistent-others"?: {
    /**
     * The information about the dock item.
     */
    "tile-data": {
      /**
       * The label of the dock item.
       */
      label: string;
      /**
       * The URL string.
       */
      url?: string;
      /**
       * The type of tile:
       * * '0': URL
       * * '1': File
       * * '3': Directory
       */
      "file-type": 0 | 1 | 3;
      /**
       * The data in a file. For Apple use only.
       */
      "file-data"?: {
        /**
         * For Apple use only.
         */
        ANY?: string;
      };
    };
    /**
     * The type of tile.
     */
    "tile-type": "file-tile" | "directory-tile" | "url-tile";
  }[];
}
