/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleSystempreferences {
  /**
   * The list of enabled System Preferences panes.
   */
  EnabledPreferencePanes?: (
    | "com.apple.ClassroomSettings"
    | "com.apple.Localization"
    | "com.apple.preference.datetime"
    | "com.apple.preference.desktopscreeneffect"
    | "com.apple.preference.digihub.discs"
    | "com.apple.preference.displays"
    | "com.apple.preference.dock"
    | "com.apple.preference.energysaver"
    | "com.apple.preference.expose"
    | "com.apple.preference.general"
    | "com.apple.preference.ink"
    | "com.apple.preference.keyboard"
    | "com.apple.preference.mouse"
    | "com.apple.preference.network"
    | "com.apple.preference.notifications"
    | "com.apple.preference.printfax"
    | "com.apple.preference.screentime"
    | "com.apple.preference.security"
    | "com.apple.preference.sidecar"
    | "com.apple.preference.sound"
    | "com.apple.preference.speech"
    | "com.apple.preference.spotlight"
    | "com.apple.preference.startupdisk"
    | "com.apple.preference.trackpad"
    | "com.apple.preference.universalaccess"
    | "com.apple.preferences.AppleIDPrefPane"
    | "com.apple.preferences.appstore"
    | "com.apple.preferences.Bluetooth"
    | "com.apple.preferences.configurationprofiles"
    | "com.apple.preferences.extensions"
    | "com.apple.preferences.FamilySharingPrefPane"
    | "com.apple.preferences.icloud"
    | "com.apple.preferences.internetaccounts"
    | "com.apple.preferences.parentalcontrols"
    | "com.apple.preferences.password"
    | "com.apple.preferences.sharing"
    | "com.apple.preferences.softwareupdate"
    | "com.apple.preferences.users"
    | "com.apple.preferences.wallet"
    | "com.apple.prefpanel.fibrechannel"
    | "com.apple.prefs.backup"
    | "com.apple.Xsan"
  )[];
  /**
   * The list of disabled System Preferences panes.
   */
  DisabledPreferencePanes?: (
    | "com.apple.ClassroomSettings"
    | "com.apple.Localization"
    | "com.apple.preference.datetime"
    | "com.apple.preference.desktopscreeneffect"
    | "com.apple.preference.digihub.discs"
    | "com.apple.preference.displays"
    | "com.apple.preference.dock"
    | "com.apple.preference.energysaver"
    | "com.apple.preference.expose"
    | "com.apple.preference.general"
    | "com.apple.preference.ink"
    | "com.apple.preference.keyboard"
    | "com.apple.preference.mouse"
    | "com.apple.preference.network"
    | "com.apple.preference.notifications"
    | "com.apple.preference.printfax"
    | "com.apple.preference.screentime"
    | "com.apple.preference.security"
    | "com.apple.preference.sidecar"
    | "com.apple.preference.sound"
    | "com.apple.preference.speech"
    | "com.apple.preference.spotlight"
    | "com.apple.preference.startupdisk"
    | "com.apple.preference.trackpad"
    | "com.apple.preference.universalaccess"
    | "com.apple.preferences.AppleIDPrefPane"
    | "com.apple.preferences.appstore"
    | "com.apple.preferences.Bluetooth"
    | "com.apple.preferences.configurationprofiles"
    | "com.apple.preferences.extensions"
    | "com.apple.preferences.FamilySharingPrefPane"
    | "com.apple.preferences.icloud"
    | "com.apple.preferences.internetaccounts"
    | "com.apple.preferences.parentalcontrols"
    | "com.apple.preferences.password"
    | "com.apple.preferences.sharing"
    | "com.apple.preferences.softwareupdate"
    | "com.apple.preferences.users"
    | "com.apple.preferences.wallet"
    | "com.apple.prefpanel.fibrechannel"
    | "com.apple.prefs.backup"
    | "com.apple.Xsan"
  )[];
  /**
   * The list of disabled System Settings extensions. All other items will be enabled. When DisabledSystemSettings is specified, DisabledPreferencePanes and EnabledPreferencePanes are ignored. Note that a given System Settings extension may supply more than one section in System Settings; disabling such an extension will disable all sections it supplies.
   */
  DisabledSystemSettings?: (
    | "com.apple.Accessibility-Settings.extension"
    | "com.apple.AirDrop-Handoff-Settings.extension"
    | "com.apple.Battery-Settings.extension"
    | "com.apple.BluetoothSettings"
    | "com.apple.CD-DVD-Settings.extension"
    | "com.apple.ClassKit-Settings.extension"
    | "com.apple.Classroom-Settings.extension"
    | "com.apple.ControlCenter-Settings.extension"
    | "com.apple.Date-Time-Settings.extension"
    | "com.apple.Desktop-Settings.extension"
    | "com.apple.Displays-Settings.extension"
    | "com.apple.ExtensionsPreferences"
    | "com.apple.Family-Settings.extension"
    | "com.apple.Focus-Settings.extension"
    | "com.apple.Game-Center-Settings.extension"
    | "com.apple.Game-Controller-Settings.extension"
    | "com.apple.HeadphoneSettings"
    | "com.apple.Internet-Accounts-Settings.extension"
    | "com.apple.Keyboard-Settings.extension"
    | "com.apple.Localization-Settings.extension"
    | "com.apple.Lock-Screen-Settings.extension"
    | "com.apple.LoginItems-Settings.extension"
    | "com.apple.Mouse-Settings.extension"
    | "com.apple.Network-Settings.extension"
    | "com.apple.NetworkExtensionSettingsUI.NESettingsUIExtension"
    | "com.apple.Notifications-Settings.extension"
    | "com.apple.Passwords-Settings.extension"
    | "com.apple.Print-Scan-Settings.extension"
    | "com.apple.Screen-Time-Settings.extension"
    | "com.apple.ScreenSaver-Settings.extension"
    | "com.apple.Sharing-Settings.extension"
    | "com.apple.Siri-Settings.extension"
    | "com.apple.Software-Update-Settings.extension"
    | "com.apple.Sound-Settings.extension"
    | "com.apple.Startup-Disk-Settings.extension"
    | "com.apple.Time-Machine-Settings.extension"
    | "com.apple.Touch-ID-Settings.extension"
    | "com.apple.Trackpad-Settings.extension"
    | "com.apple.Transfer-Reset-Settings.extension"
    | "com.apple.Users-Groups-Settings.extension"
    | "com.apple.WalletSettingsExtension"
    | "com.apple.Wallpaper-Settings.extension"
    | "com.apple.settings.Storage"
    | "com.apple.systempreferences.AppleIDSettings"
    | "com.apple.wifi-settings-extension"
  )[];
}
