/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * Specifies an MDMv1 profile to download and install
 */
export interface LegacyProfile {
  /**
   * The URL of the profile to download and install, which needs to start with 'https://', and must be hosted by the MDM server. The system silently ignores any account or passcode payloads in the profile. Use their declarative configurations instead.
   * If a user enrollment triggers this configuration, the system silently ignores any MDM 1 payloads in macOS where the User Enrollment Mode setting is 'forbidden'. In iOS and tvOS, the system rejects the entire profile.
   */
  ProfileURL: string;
}
