/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * This command allows the server to install enterprise applications on a device. It provides a more secure version of 'InstallApplication' that specifies a 'ManifestURL'.
 */
export interface InstallEnterpriseApplicationCommand {
  /**
   * A dictionary that specifies where to download the app. This value is backward-compatible with the manifest for the InstallApplicationCommand; however, it also allows you to specify 'sha256s' and 'sha256'-size for SHA-256 hashes.
   */
  Manifest?: {
    /**
     * A manifest, which is backward-compatible with the manifest for the 'InstallApplication' command; however, it also allows you to specify 'sha256s' and 'sha256-size' for SHA-256 hashes.
     */
    ANY?: string;
  };
  /**
   * The URL of the app manifest, which must begin with 'https:'.
   */
  ManifestURL?: string;
  /**
   * An array of DER-encoded certificates to pin the connection when fetching the 'ManifestURL'.
   */
  ManifestURLPinningCerts?: string[];
  /**
   * If 'true', certificate revocation checks require a positive response when using certificate pinning with 'ManifestURLPinningCerts'.
   */
  PinningRevocationCheckRequired?: boolean;
  /**
   * If 'true', install the app as a managed app.
   * For manifest-based installs, if 'true' the system considers only the .app bundles installed into '/Applications' as managed (macOS 11 through 13 required the pkg to contain a single .app bundle). Reinstalling a managed app without this flag causes it to become unmanaged.
   * This value is available in macOS 11 and later.
   */
  InstallAsManaged?: boolean;
  /**
   * The management flags. The only supported flag is:
   * * '1': Remove the app upon removal of the MDM profile. This also requires that you pass 'true' for 'InstallAsManaged'.
   * This value is available in macOS 11 and later.
   */
  ManagementFlags?: 1;
  /**
   * A dictionary that contains the initial configuration of the app, if you choose to provide it. This value is available in macOS 11 and later.
   */
  Configuration?: {
    /**
     * An app configuration key.
     */
    ANY?: string;
  };
  /**
   * The change management state. The only supported state is:
   * * 'Managed': Take management of the app if the user installed it already. This also requires that you pass 'true' for 'InstallAsManaged'.
   * This value is available in macOS 11 and later.
   */
  ChangeManagementState?: "Managed";
  /**
   * If 'true', the app is an iOS app that can run on an Apple silicon in macOS 11 and later.
   */
  iOSApp?: boolean;
}
