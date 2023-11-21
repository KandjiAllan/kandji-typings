/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleMcxprinting {
  /**
   * If 'true', requires an administrator password to add printers.
   */
  RequireAdminToAddPrinters?: boolean;
  /**
   * If 'true', allows printers that connect directly to a user's computer.
   */
  AllowLocalPrinters?: boolean;
  /**
   * If 'true', requires an administrator password to print locally.
   */
  RequireAdminToPrintLocally?: boolean;
  /**
   * If 'true', shows only managed printers.
   */
  ShowOnlyManagedPrinters?: boolean;
  /**
   * If 'true', prints the page footer (including the user name and date).
   */
  PrintFooter?: boolean;
  /**
   * If 'true', includes the MAC address.
   */
  PrintMACAddress?: boolean;
  /**
   * The footer font size.
   */
  FooterFontSize?: string;
  /**
   * The footer font name.
   */
  FooterFontName?: string;
  /**
   * The default printer for the user.
   */
  DefaultPrinter?: {
    /**
     * The device URI.
     */
    DeviceURI?: string;
    /**
     * The display name.
     */
    DisplayName?: string;
  };
  /**
   * The printers available to a user.
   */
  UserPrinterList?: {
    /**
     * A dictionary of printer details.
     */
    Printer?: {
      /**
       * The device URI.
       */
      DeviceURI?: string;
      /**
       * The display name.
       */
      DisplayName?: string;
      /**
       * The printer's location.
       */
      Location?: string;
      /**
       * The printer's model.
       */
      Model?: string;
      /**
       * If 'true', locks the printer.
       */
      PrinterLocked?: boolean;
      /**
       * The printer's PPDURL.
       */
      PPDURL?: string;
    };
  };
}
