/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * Use this section to define settings for network relays.
 */
export interface ComAppleRelayManaged {
  /**
   * An array of dictionaries that describes one or more relay servers that can be chained together.
   */
  Relays: {
    /**
     * The URL or URI template (such as defined in RFC 9298) of a relay server that is reachable using HTTP/3 and supports proxying TCP and UDP using the CONNECT method. Each relay must have at least one URL, for either HTTP/3 or HTTP/2, and may support both.
     */
    HTTP3RelayURL?: string;
    /**
     * The URL or URI template (such as defined in RFC 9298) of a relay server that is reachable using HTTP/2 and supports proxying TCP and UDP using the CONNECT method. Each relay must have at least one URL, for either HTTP/3 or HTTP/2, and may support both.
     */
    HTTP2RelayURL?: string;
    /**
     * A dictionary of custom HTTP header keys and values to add to each request to the relay. The dictionary key name represents the HTTP header field name to use, and the dictionary value is the string to use as the HTTP header field value.
     */
    AdditionalHTTPHeaderFields?: {
      /**
       * The HTTP header field value for the corresponding header field name.
       */
      ANY: string;
    };
    /**
     * UUID pointing to an identity certificate payload. This identity will be used to authenticate the user to the relay server.
     */
    PayloadCertificateUUID?: string;
    /**
     * An array of raw public keys used to authenticate the server during a TLS handshake. The server must use one of the keys in the handshake in order to authenticate. If no keys are specified, default TLS trust evaluation is used.
     */
    RawPublicKeys?: string[];
  }[];
  /**
   * A list of domain strings used to determine which connection should be routed through the servers contained in Relays. Any connection that matches the domain exactly or is a subdomain of the listed domain will use the relay servers, unless they match an excluded domain. If no domains are listed, traffic to all domains, except those matching an excluded domain, will be routed to the relay servers.
   */
  MatchDomains?: string[];
  /**
   * A list of domain strings that should not be routed through the servers contained in Relays. Any connection that matches the domain exactly or is a subdomain of the listed domain will not use the relay server.
   */
  ExcludedDomains?: string[];
  /**
   * A globally-unique identifier for this relay configuration. This UUID is used to route managed apps through the servers contained in Relays.
   */
  RelayUUID?: string;
}
