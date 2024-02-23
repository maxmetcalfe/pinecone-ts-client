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
 * The request for the `describe_index_stats` operation.
 * @export
 * @interface DescribeIndexStatsRequest
 */
export interface DescribeIndexStatsRequest {
    /**
     * If this parameter is present, the operation only returns statistics
     * for vectors that satisfy the filter.
     * See https://www.pinecone.io/docs/metadata-filtering/.
     * @type {object}
     * @memberof DescribeIndexStatsRequest
     */
    filter?: object;
}

/**
 * Check if a given object implements the DescribeIndexStatsRequest interface.
 */
export function instanceOfDescribeIndexStatsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DescribeIndexStatsRequestFromJSON(json: any): DescribeIndexStatsRequest {
    return DescribeIndexStatsRequestFromJSONTyped(json, false);
}

export function DescribeIndexStatsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DescribeIndexStatsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'filter': !exists(json, 'filter') ? undefined : json['filter'],
    };
}

export function DescribeIndexStatsRequestToJSON(value?: DescribeIndexStatsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'filter': value.filter,
    };
}

