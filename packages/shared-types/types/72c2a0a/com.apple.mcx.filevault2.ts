/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleMCXFileVault2 {
  /**
   * If 'true', enables FileVault.
   */
  Enable: "On" | "Off";
  /**
   * If 'true', defers enabling FileVault until the designated user logs out. For details, see 'fdesetup(8)'. The person enabling FileVault must be either a local user or a mobile account user.
   */
  Defer?: boolean;
  /**
   * If 'true', enables a prompt for missing user name or password fields.
   */
  UserEntersMissingInfo?: boolean;
  /**
   * If 'true', creates a personal recovery key and displays it to the user.
   */
  UseRecoveryKey?: boolean;
  /**
   * If 'false', prevents display of the personal recovery key to the user after FileVault is enabled.
   */
  ShowRecoveryKey?: boolean;
  /**
   * The path to the location where the recovery key and computer information property list are stored.
   */
  OutputPath?: string;
  /**
   * The DER-encoded certificate data if 'UseRecoveryKey' is enabled.
   */
  Certificate?: string;
  /**
   * The UUID of the payload within the same profile containing the asymmetric recovery key certificate payload.
   */
  PayloadCertificateUUID?: string;
  /**
   * The user name of the Open Directory user to be added to FileVault.
   */
  Username?: string;
  /**
   * The password of the Open Directory user to be added to FileVault. Use the 'UserEntersMissingInfo' key if you want to prompt for this information.
   */
  Password?: string;
  /**
   * If 'true' and no certificate information is provided in this payload, the keychain created at '/Library/Keychains/FileVaultMaster.keychain' is used when the institutional recovery key is added.
   */
  UseKeychain?: boolean;
  /**
   * The maximum number of times users can bypass enabling FileVault before being required to enable it to log in. If the value is '0', the user will be required to enabled FileVault the next time they attempt to log in. Setting this key to '–1' disables the feature.
   */
  DeferForceAtUserLoginMaxBypassAttempts?: number;
  /**
   * If 'true', prevents requests for enabling FileVault at user logout time.
   */
  DeferDontAskAtUserLogout?: boolean;
  /**
   * If 'true', and this payload is installed after enrolling with MDM in Setup Assistant, it requests Setup Assistant to enable FileVault at setup time.
   * To use this, enable the Await Device Configured DEP configuration option, send this profile with this key set, before sending the DeviceConfigured command. An admin SecureToken user is required, otherwise the FileVault pane does not appear.
   */
  ForceEnableInSetupAssistant?: boolean;
}
