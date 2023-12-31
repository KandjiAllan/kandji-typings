/* eslint-disable */
/**
 * This file was automatically generated by mdm-docs-parser.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run mdm-docs-parser:generate to regenerate this file.
 */

/**
 * Configures a computer to send or receive "PowerON". "PowerOFF", "Reset" requests.
 */
export interface ComAppleLom {
  /**
   * The UUID certificate for the device. This key indicates the device can receive 'PowerON', 'PowerOFF', and 'Reset' requests from a LOM controller. This certificate must contain the Key Usage attributes of Digital Signature, Key Encipherment and Data Encipherment. As well as the Extended Key Usage attributes of Server Authentication and Client Authentication.
   */
  DeviceCertificateUUID?: string;
  /**
   * The UUID certificate for the LOM controller. This key configures the device to accept the LOMDeviceRequestCommand from MDM and then send it to the target device.
   */
  ControllerCertificateUUID?: string;
  /**
   * Array of payload UUIDs containing CA certificates that controllers use to evaluate trust of device certificates.
   */
  DeviceCACertificateUUIDs?: string[];
  /**
   * Array of payload UUIDs containing CA certificates that devices use to evaluate trust of controller certificates.
   * This key configures the device to accept the LOMDeviceRequestCommand from MDM and then send it to the target device. This certificate must contain the Key Usage attributes of Digital Signature, Key Encipherment and Data Encipherment. As well as the Extended Key Usage attributes of Server Authentication and Client Authentication.
   */
  ControllerCACertificateUUIDs?: string[];
}
