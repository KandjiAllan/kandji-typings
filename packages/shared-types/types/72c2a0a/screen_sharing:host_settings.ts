/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * Use this configuration to define Screen Sharing host settings and restrictions.
 */
export interface ScreenSharingHostSettings {
  /**
   * Sets the maximum number of Virtual Displays to make available to clients.
   */
  MaximumVirtualDisplays?: number;
  /**
   * Specifies the initial UDP port number for connecting to the host. Screen Sharing needs multiple connections
   * so additional connections will increment this base port number by 1 for each needed connection. This does not
   * change the port number used to initially establish a connection with a host, which is always TCP port 5900.
   */
  PortBase?: number;
  /**
   * Set to true to prevent users from copying files from the Screen Sharing host.
   */
  PreventCopyFilesFromHost?: boolean;
  /**
   * Set to true to prevent users from copying files to the Screen Sharing host.
   */
  PreventCopyFilesToHost?: boolean;
  /**
   * Set to true to prevent clients from establishing High Performance connections to the host.
   */
  PreventHighPerformanceConnections?: boolean;
}