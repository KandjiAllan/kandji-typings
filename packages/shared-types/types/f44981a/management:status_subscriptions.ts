/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * Use this configuration to define the status subscriptions that cause status to be reported by the client.
 */
export interface ManagementStatusSubscriptions {
  /**
   * An array of status items that the device notifies subscribers about.
   */
  StatusItems: {
    /**
     * The name of the status item to send to subscribers.
     */
    Name: string;
  }[];
}
