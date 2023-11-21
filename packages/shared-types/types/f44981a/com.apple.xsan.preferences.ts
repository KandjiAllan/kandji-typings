/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleXsanPreferences {
  /**
   * An array of Xsan or StorNext volume names. The Xsan client attempts to automatically mount these volumes at startup. The system administrator can mount additional volumes manually by using the 'xsanctl(8)' mount command.
   */
  onlyMount?: string[];
  /**
   * An array of Xsan or StorNext volume names. If no 'onlyMount' array is present, the Xsan client automatically attempts to mount all SAN volumes except the volumes in this array. The system administrator can mount those volumes manually by using the 'xsanctl(8)' mount command.
   */
  denyMount?: string[];
  /**
   * An array of StorNext volume names. If the Xsan client is attempting to mount a volume named in this array, the client only mounts the volume if its logical units (LUNs) are available through Fibre Channel. It doesn't attempt to mount the volume using Distributed LAN Client (DLC).
   */
  denyDLC?: string[];
  /**
   * An array of StorNext volume names. If the Xsan client is attempting to mount a volume named in this array, the Xsan client attempts to mount the volume using DLC. If DLC isn't available, the client attempts to mount the volume if its LUNs are available through Fibre Channel. The volume name must not also appear in 'denyDLC'.
   */
  preferDLC?: string[];
  /**
   * If 'true', use the DLC for all volumes.
   */
  useDLC?: boolean;
}
