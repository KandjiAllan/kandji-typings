/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

export interface ComAppleAssetCacheManaged {
  /**
   * Allow the system to purge content from the cache automatically when it needs disk space for other apps (i.e. when free disk space runs low on the computer). Customers who want Content Caching to be as effective as possible should turn this setting off.
   * Available in macOS 10.15 and later.
   */
  AllowCacheDelete?: boolean;
  /**
   * If 'true', caches the user's iCloud data. Clients may take some time (hours or days) to react to changes to this setting; it doesn't have an immediate effect.
   *
   * At least one of the 'AllowPersonalCaching' or 'AllowSharedCaching' keys must be 'true'.
   */
  AllowPersonalCaching?: boolean;
  /**
   * If 'true', caches non-iCloud content, such as apps and software updates. Clients may take some time (hours, days) to react to changes to this setting; it does not have an immediate effect.
   *
   * At least one of the 'AllowPersonalCaching' or 'AllowSharedCaching' keys must be 'true'.
   */
  AllowSharedCaching?: boolean;
  /**
   * If 'true', automatically activates the content cache when possible and prevents it from being disabled. If the 'allowContentCaching' restriction is set to 'false', 'AutoActivation' is also 'false'.
   * Removing a profile that set 'AutoActivation' to 'true' does not deactivate the Content Cache.
   */
  AutoActivation?: boolean;
  /**
   * Automatically enable Internet connection sharing when possible and prevent disabling Internet connection sharing. 'DenyTetheredCaching' overrides 'AutoEnableTetheredCaching'. Tethered caching requires Content Caching.
   * Available in macOS 10.15.4 and later.
   */
  AutoEnableTetheredCaching?: boolean;
  /**
   * The maximum number of bytes of disk space that will be used for the content cache. A value of 0 means unlimited disk space.
   */
  CacheLimit?: number;
  /**
   * The path to the directory used to store cached content. Changing this setting manually doesn't automatically move cached content from the old location to the new one. To move content automatically, use the Sharing preference's Content Caching pane. The value must be (or end with) '/Library/Application Support/Apple/AssetCache/Data'.
   *
   * A directory and its intermediates are created for the given data path if it doesn't already exist. The directory is owned by '_assetcache:_assetcache' and has mode 0750. Its immediate parent directory ('.../Library/Application Support/Apple/AssetCache') is owned by '_assetcache:_assetcache' and has mode '0755'.
   */
  DataPath?: string;
  /**
   * If 'true', disables tethered caching.
   */
  DenyTetheredCaching?: boolean;
  /**
   * If 'true', Content Caching displays exceptional conditions (alerts) as system notifications in the upper corner of the screen. Alerts were automatically displayed starting in macOS 10.13. In macOS 10.15 the alerts are off by default, but still available via this setting.
   * Available in macOS 10.15 and later.
   */
  DisplayAlerts?: boolean;
  /**
   * If 'true', prevents the computer from sleeping as long as Content Caching is on (System Preferences > Sharing > Content Caching is on). Customers who want Content Caching to be as available as much as possible should turn this setting on.
   * Available in macOS 10.15 and later.
   */
  KeepAwake?: boolean;
  /**
   * An array of dictionaries describing a range of client IP addresses to serve.
   */
  ListenRanges?: {
    /**
     * The IP address type.
     */
    type?: "IPv4" | "IPv6";
    /**
     * The first IP address in the range.
     */
    first: string;
    /**
     * The last IP address in the range.
     */
    last: string;
  }[];
  /**
   * If 'true', the content cache provides content to the clients in the 'ListenRanges'.
   */
  ListenRangesOnly?: boolean;
  /**
   * If 'true', the content cache provides content to the clients in the union of the 'ListenRanges', 'PeerListenRanges' and 'Parents'.
   */
  ListenWithPeersAndParents?: boolean;
  /**
   * If 'true', the content cache offers content to clients only on the same immediate local network only. No content is offered to clients on other networks reachable by the content cache. If 'LocalSubnetsOnly' is set to 'true', 'ListenRanges' will be ignored.
   */
  LocalSubnetsOnly?: boolean;
  /**
   * If 'true', the Content Cache logs the IP address and port number of the clients that request content.
   */
  LogClientIdentity?: boolean;
  /**
   * An array of the local IP addresses of other content caches that this cache should download from or upload to, instead of downloading from or uploading to Apple directly. Invalid addresses and addresses of computers that aren't content caches are ignored. Parent caches that become unavailable are skipped. If all parent content caches become unavailable, the content cache downloads from or uploads to Apple directly, until a parent content cache becomes available again.
   */
  Parents?: string[];
  /**
   * The policy to implement when choosing among more than one configured parent content cache. With every policy, parent caches that are temporarily unavailable are skipped.
   *
   * 'first-available': Always use the first available parent in the Parents list. Use this policy to designate permanent primary, secondary, and subsequent parents.
   *
   * 'url-path-hash': Hash the path part of the requested URL so that the same parent is always used for the same URL. This is useful for maximizing the size of the combined caches of the parents.
   *
   * 'random': Choose a parent at random. Use this policy for load balancing.
   *
   * 'round-robin': Rotate through the parents in order. Use this policy for load balancing.
   *
   * 'sticky-available': Use the first available parent that is available in the Parents list until it becomes unavailable, then advance to the next one. Use this policy for designating floating primary, secondary, and subsequent parents.
   */
  ParentSelectionPolicy?: "first-available" | "url-path-hash" | "random" | "round-robin" | "sticky-available";
  /**
   * An array of dictionaries describing a range of peer IP addresses that the content cache uses to filter its list of peers to query for content. The content cache only queries peers in 'PeerFilterRanges'. When 'PeerFilterRanges' is an empty array, the content cache doesn't query any peers.
   */
  PeerFilterRanges?: {
    /**
     * The IP address type.
     */
    type?: "IPv4" | "IPv6";
    /**
     * The first IP address in the range.
     */
    first: string;
    /**
     * The last IP address in the range.
     */
    last: string;
  }[];
  /**
   * An array of dictionaries describing a range of peer IP addresses the content cache responds to. When 'PeerListenRanges' is an empty array, the content cache responds with an error to all cache queries.
   */
  PeerListenRanges?: {
    /**
     * The IP address type.
     */
    type?: "IPv4" | "IPv6";
    /**
     * The first IP address in the range.
     */
    first: string;
    /**
     * The last IP address in the range.
     */
    last: string;
  }[];
  /**
   * If 'true', the content cache only peers with other content caches on the same immediate local network, rather than with content caches that use the same public IP address as the device. When 'PeerLocalSubnetsOnly' is 'true', it overrides the configuration of 'PeerFilterRanges' and 'PeerListenRanges'. If the network changes, the local network peering restrictions update appropriately. If 'false', the content cache defers to 'PeerFilterRanges' and 'PeerListenRanges' for configuring the peering restrictions.
   */
  PeerLocalSubnetsOnly?: boolean;
  /**
   * The TCP port number on which the content cache accepts requests for uploads or downloads. Set the port to 0 to pick a random, available port.
   */
  Port?: number;
  /**
   * An array of dictionaries describing a range of public IP addresses that the cloud servers should use for matching clients to content caches.
   */
  PublicRanges?: {
    /**
     * The IP address type.
     */
    type?: "IPv4" | "IPv6";
    /**
     * The first IP address in the range.
     */
    first: string;
    /**
     * The last IP address in the range.
     */
    last: string;
  }[];
}
