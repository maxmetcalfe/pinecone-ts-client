/* tslint:disable */
/* eslint-disable */
/**
 * Pinecone Control Plane API
 * Pinecone is a vector database that makes it easy to search and retrieve billions of high-dimensional vectors.
 *
 * The version of the OpenAPI document: v1
 * Contact: support@pinecone.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * The response for the `upsert` operation.
 * @export
 * @interface UpsertResponse
 */
export interface UpsertResponse {
    /**
     * The number of vectors upserted.
     * @type {number}
     * @memberof UpsertResponse
     */
    upsertedCount?: number;
}

/**
 * Check if a given object implements the UpsertResponse interface.
 */
export function instanceOfUpsertResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpsertResponseFromJSON(json: any): UpsertResponse {
    return UpsertResponseFromJSONTyped(json, false);
}

export function UpsertResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpsertResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'upsertedCount': !exists(json, 'upsertedCount') ? undefined : json['upsertedCount'],
    };
}

export function UpsertResponseToJSON(value?: UpsertResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'upsertedCount': value.upsertedCount,
    };
}

