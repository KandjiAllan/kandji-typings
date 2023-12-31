/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * This command allows the server to install a book on a device. If the book is already being managed, this command will update the book.
 */
export interface InstallMediaCommand {
  PayloadKeys?: {
    /**
     * The book's iTunes Store identifier.
     */
    iTunesStoreID?: number;
    /**
     * The URL to retrieve the book. This value is available in iOS 8 and later.
     */
    MediaURL?: string;
    /**
     * The media type, which can only be 'Book'.
     */
    MediaType?: "Book";
    /**
     * The book's persistent identifier in reverse-DNS form; for example, 'com.acme.manuals.training'. This value is available in iOS 8 and later.
     */
    PersistentID?: string;
    /**
     * The kind of the media, which can be one of the following values:
     * * 'pdf': A PDF file
     * * 'epub': An EPUB file in 'gzip' format.
     * * 'ibooks': An iBooks Author file in 'gzip' format.
     * If you omit this value, its value is the file extension in the URL. This value is available in iOS 8 and later.
     */
    Kind?: "pdf" | "epub" | "ibooks";
    /**
     * The book's version number. This value is available in iOS 8 and later.
     */
    Version?: string;
    /**
     * The name of the book's author. This value is available in iOS 8 and later.
     */
    Author?: string;
    /**
     * The book's title. This value is available in iOS 8 and later.
     */
    Title?: string;
  };
  ResponseKeys?: {
    /**
     * The book's iTunes Store identifier, if present in the command.
     */
    iTunesStoreID?: number;
    /**
     * The URL to retrieve the book, if present in the command. This value is available in iOS 8 and later.
     */
    MediaURL?: string;
    /**
     * The book's persistent identifier, if present in the command. This value is available in iOS 8 and later.
     */
    PersistentID?: string;
    /**
     * The media type, which can only be 'Book'.
     */
    MediaType?: string;
    /**
     * The installation state of this book. The 'Failed' and 'Unknown' states are transient and the device only reports them once. Books from the Book Store report their state as 'Installed' instead of 'Managed'.
     */
    State?:
      | "Queued"
      | "PromptingForLogin"
      | "Updating"
      | "Installing"
      | "Managed"
      | "ManagedButUninstalled"
      | "Installed"
      | "Uninstalled"
      | "Failed"
      | "Unknown";
    /**
     * The reason, if installation fails, which is one of the following values:
     * * 'CouldNotVerifyITunesStoreID': The 'iTunesStoreID' is invalid.
     * * 'PurchaseNotFound': The Volume Purchase Program (VPP) license isn't in the user's history.
     * * 'AppStoreDisabled': App Store isn't available on the device.
     * * 'WrongMediaType': The media type is invalid. The only valid type is 'Book'.
     * * 'DownloadInvalid': The URL doesn't lead to a valid book.
     * * 'EnterpriseBooksNotSupportedInMultiUser': Multiuser mode doesn't support enterprise books.
     */
    RejectionReason?:
      | "CouldNotVerifyITunesStoreID"
      | "PurchaseNotFound"
      | "AppStoreDisabled"
      | "WrongMediaType"
      | "DownloadInvalid"
      | "EnterpriseBooksNotSupportedInMultiUser";
  };
}
