/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * Use this configuration to define settings for access to email servers.
 */
export interface AccountMail {
  /**
   * The name that apps show to the user for this mail account. If not present, the system generates a suitable default.
   */
  VisibleName?: string;
  /**
   * The identifier of an asset declaration that contains the user identity for this account. Set the corresponding asset type to 'UserIdentity'.
   */
  UserIdentityAssetReference?: string;
  /**
   * The settings for the incoming mail server for this account.
   */
  IncomingServer: {
    /**
     * The mail protocol this account uses.
     */
    ServerType: "IMAP" | "POP";
    /**
     * The host name for the incoming mail server.
     */
    HostName: string;
    /**
     * The port number for the incoming mail server.
     */
    Port?: number;
    /**
     * The authentication method for the incoming mail server.
     */
    AuthenticationMethod: "None" | "Password" | "CRAMMD5" | "NTLM" | "HTTPMD5";
    /**
     * The identifier of an asset declaration that contains the credentials for this account to authenticate with an incoming mail server. The corresponding asset must be of type 'CredentialUserNameAndPassword'.
     * If the 'AuthenticationMethod' is 'None', this field must be blank. Otherwise, the declaration must contain this field.
     */
    AuthenticationCredentialsAssetReference?: string;
    /**
     * The path prefix for the IMAP server. The system uses this only when 'ServerType' is 'IMAP'.
     */
    IMAPPathPrefix?: string;
  };
  /**
   * The settings for the outgoing mail server for this account.
   */
  OutgoingServer: {
    /**
     * The host name for the outgoing mail server.
     */
    HostName: string;
    /**
     * The port number for the outgoing mail server.
     */
    Port?: number;
    /**
     * The authentication method for the outgoing mail server.
     */
    AuthenticationMethod: "None" | "Password" | "CRAMMD5" | "NTLM" | "HTTPMD5";
    /**
     * The identifier of an asset declaration that contains the credentials for this account to authenticate with an outgoing mail server. The corresponding asset must be of type 'CredentialUserNameAndPassword'.
     * If the 'AuthenticationMethod' is 'None', this field must be blank. Otherwise, the declaration must contain this field.
     */
    AuthenticationCredentialsAssetReference?: string;
  };
  /**
   * Settings for S/MIME.
   */
  SMIME?: {
    /**
     * Settings for S/MIME signing.
     */
    Signing?: {
      /**
       * If 'true', the system enables S/MIME signing.
       */
      Enabled: boolean;
      /**
       * Specifies the identifier of an asset declaration containing the identity required for S/MIME signing of messages sent from this account.
       */
      IdentityAssetReference?: string;
      /**
       * If 'true', the user can turn S/MIME signing on or off in Settings.
       */
      UserOverrideable?: boolean;
      /**
       * If 'true', the user can select an S/MIME signing identity in Settings.
       */
      IdentityUserOverrideable?: boolean;
    };
    /**
     * Settings for S/MIME encryption.
     */
    Encryption?: {
      /**
       * If 'true', the system enables S/MIME encryption by default, which the user can't override if 'PerMessageSwitchEnabled' is 'false'.
       */
      Enabled: boolean;
      /**
       * Specifies the identifier of an asset declaration containing the identity required for S/MIME encryption. The system attaches the public certificate to outgoing mail to allow the user to receive encrypted mail. When the user sends encrypted mail, the system uses the public certificate to encrypt the copy of the mail in their Sent mailbox.
       */
      IdentityAssetReference?: string;
      /**
       * If 'true', the user can set the default value for S/MIME encryption to on or off in Settings.
       */
      UserOverrideable?: boolean;
      /**
       * If 'true', the user can select an S/MIME signing identity in Settings.
       */
      IdentityUserOverrideable?: boolean;
      /**
       * If 'true', the system enables the per-message encryption switch in the compose view.
       */
      PerMessageSwitchEnabled?: boolean;
    };
  };
}
