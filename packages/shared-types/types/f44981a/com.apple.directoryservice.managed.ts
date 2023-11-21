/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * Directory Service
 */
export interface ComAppleDirectoryServiceManaged {
  /**
   * The Active Directory domain to join.
   */
  HostName: string;
  /**
   * The user name of the account for the domain.
   */
  UserName?: string;
  /**
   * The password of the account for the domain.
   */
  Password?: string;
  /**
   * The client's identifier.
   */
  ClientID?: string;
  /**
   * The directory service description.
   */
  Description?: string;
  /**
   * The organizational unit where the joining computer object is added.
   */
  ADOrganizationalUnit?: string;
  /**
   * The network home protocol to use: 'afp' or 'smb'.
   */
  ADMountStyle?: string;
  /**
   * If 'true', enables the 'ADCreateMobileAccountAtLogin' key.
   */
  ADCreateMobileAccountAtLoginFlag?: boolean;
  /**
   * If 'true', creates a mobile account at login.
   */
  ADCreateMobileAccountAtLogin?: boolean;
  /**
   * If 'true', enables the 'ADWarnUserBeforeCreatingMA' key.
   */
  ADWarnUserBeforeCreatingMAFlag?: boolean;
  /**
   * If 'true', enables the warning before creating the mobile account.
   */
  ADWarnUserBeforeCreatingMA?: boolean;
  /**
   * If 'true', enables the 'ADForceHomeLocal' key.
   */
  ADForceHomeLocalFlag?: boolean;
  /**
   * If 'true', forces a local home directory.
   */
  ADForceHomeLocal?: boolean;
  /**
   * If 'true', enables the 'ADUseWindowsUNCPath' key.
   */
  ADUseWindowsUNCPathFlag?: boolean;
  /**
   * If 'true', uses the UNC path from Active Directory to derive the network home location.
   */
  ADUseWindowsUNCPath?: boolean;
  /**
   * If 'true', enables the 'ADAllowMultiDomainAuth' key.
   */
  ADAllowMultiDomainAuthFlag?: boolean;
  /**
   * If 'true', allows authentication from any domain in the namespace.
   */
  ADAllowMultiDomainAuth?: boolean;
  /**
   * If 'true', enables the 'ADDefaultUserShell' key.
   */
  ADDefaultUserShellFlag?: boolean;
  /**
   * The default user shell.
   */
  ADDefaultUserShell?: string;
  /**
   * If 'true', enables the 'ADMapUIDAttribute' key.
   */
  ADMapUIDAttributeFlag?: boolean;
  /**
   * The map UID to attribute.
   */
  ADMapUIDAttribute?: string;
  /**
   * If 'true', enables the 'ADMapGIDAttribute' key.
   */
  ADMapGIDAttributeFlag?: boolean;
  /**
   * The map GID to attribute.
   */
  ADMapGIDAttribute?: string;
  /**
   * If 'true', enables the 'ADMapGGIDAttributeFlag' key.
   */
  ADMapGGIDAttributeFlag?: boolean;
  /**
   * The map group GID to attribute.
   */
  ADMapGGIDAttribute?: string;
  /**
   * If 'true', enables the 'ADPreferredDCServer' key.
   */
  ADPreferredDCServerFlag?: boolean;
  /**
   * The preferred domain server.
   */
  ADPreferredDCServer?: string;
  /**
   * If 'true', enables the 'ADDomainAdminGroupList' key.
   */
  ADDomainAdminGroupListFlag?: boolean;
  /**
   * The list of Active Directory groups that are granted admin access.
   */
  ADDomainAdminGroupList?: string[];
  /**
   * If 'true', enables the 'ADNamespace' key.
   */
  ADNamespaceFlag?: boolean;
  /**
   * The primary user account naming convention; either 'forest' or 'domain'.
   */
  ADNamespace?: string;
  /**
   * If 'true', enables the 'ADPacketSign' key.
   */
  ADPacketSignFlag?: boolean;
  /**
   * The packet signing policy.
   */
  ADPacketSign?: string;
  /**
   * If 'true', enables the 'ADPacketEncrypt' key.
   */
  ADPacketEncryptFlag?: boolean;
  /**
   * The packet encryption policy.
   */
  ADPacketEncrypt?: string;
  /**
   * If 'true', enables the 'ADRestrictDDNS' key.
   */
  ADRestrictDDNSFlag?: boolean;
  /**
   * An array of strings representing the interfaces that are allowed for dynamic DNS updates (for example, en0, en1, and so on).
   */
  ADRestrictDDNS?: string[];
  /**
   * If true, enables the 'ADTrustChangePassIntervalDays 'key.
   */
  ADTrustChangePassIntervalDaysFlag?: boolean;
  /**
   * The number of days before requiring a change of the computer trust account password. '0' disables the feature.
   */
  ADTrustChangePassIntervalDays?: number;
}
