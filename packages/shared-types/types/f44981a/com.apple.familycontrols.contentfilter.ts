/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleFamilycontrolsContentfilter {
  /**
   * If 'true', enables web content filters.
   */
  restrictWeb: boolean;
  /**
   * If 'true', filters content automatically.
   */
  useContentFilter?: boolean;
  /**
   * If 'true', enables web content filters.
   */
  whitelistEnabled?: boolean;
  /**
   * An array of sites that defines an allow list. If specified, this defines additional allowed sites besides those in the automated allow list and deny list, including disallowed adult sites.
   *
   * This key is required if 'whiteListEnabled' is 'true'.
   */
  siteWhitelist?: {
    /**
     * The site prefix, including http(s) scheme.
     */
    address: string;
    /**
     * The site page title.
     */
    pageTitle?: string;
  }[];
  /**
   * The array of URLs that defines an allow list. When 'restrictWeb' and 'useContentFilter' are enabled, only URLs in the allow list are available to the user.
   */
  filterWhitelist?: string[];
  /**
   * The array of URLs that defines a deny list. When 'restrictWeb' and 'useContentFilter' are enabled, no URLs in the deny list are available to the user.
   */
  filterBlacklist?: string[];
}
