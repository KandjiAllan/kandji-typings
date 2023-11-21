/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * This command allows an MDM server to remove managed media. This command returns Acknowledged even if the item is not found.
 */
export interface RemoveMediaCommand {
  /**
   * The media type, which can only be 'Book'.
   */
  MediaType: "Book";
  /**
   * The book's iTunes Store identifier.
   */
  iTunesStoreID?: string;
  /**
   * The book's persistent identifier in reverse-DNS form; for example, 'com.acme.manuals.training'.
   */
  PersistentID?: string;
}