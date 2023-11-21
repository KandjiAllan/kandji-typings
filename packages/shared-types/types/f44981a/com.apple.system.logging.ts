/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleSystemLogging {
  /**
   * Not to be used.
   */
  Processes?: {
    /**
     * TBD
     */
    ANY?: string;
  };
  /**
   * A dictionary enabling the logging level for subsystems. See 'Customizing Logging Behavior While Debugging' for more details about the format of the dictionary.
   */
  Subsystems?: {
    /**
     * TBD
     */
    ANY?: string;
  };
  /**
   * This dictionary has one key, 'Enable-Private-Data'. Setting that value to 'true' enables private data logging for the entire system.
   */
  System?: {
    /**
     * TBD
     */
    ANY?: string;
  };
}