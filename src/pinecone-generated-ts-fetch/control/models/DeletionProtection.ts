/* tslint:disable */
/* eslint-disable */
/**
 * Pinecone Control Plane API
 * Pinecone is a vector database that makes it easy to search and retrieve billions of high-dimensional vectors.
 *
 * The version of the OpenAPI document: 2024-07
 * Contact: support@pinecone.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Whether delete protection is enabled/disabled for the resource.
 * @export
 */
export const DeletionProtection = {
  Disabled: 'disabled',
  Enabled: 'enabled',
} as const;
export type DeletionProtection =
  (typeof DeletionProtection)[keyof typeof DeletionProtection];

export function DeletionProtectionFromJSON(json: any): DeletionProtection {
  return DeletionProtectionFromJSONTyped(json, false);
}

export function DeletionProtectionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeletionProtection {
  return json as DeletionProtection;
}

export function DeletionProtectionToJSON(
  value?: DeletionProtection | null
): any {
  return value as any;
}
