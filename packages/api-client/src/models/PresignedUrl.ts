/* tslint:disable */
/* eslint-disable */
/**
 * Migration Planner API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: undefined
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PresignedUrl
 */
export interface PresignedUrl {
    /**
     * Pre-signed URL for downloading the source discovery image.
     * @type {string}
     * @memberof PresignedUrl
     */
    url: string;
    /**
     * Expiration time for the URL token.
     * @type {Date}
     * @memberof PresignedUrl
     */
    expiresAt?: Date;
}

/**
 * Check if a given object implements the PresignedUrl interface.
 */
export function instanceOfPresignedUrl(value: object): value is PresignedUrl {
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function PresignedUrlFromJSON(json: any): PresignedUrl {
    return PresignedUrlFromJSONTyped(json, false);
}

export function PresignedUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): PresignedUrl {
    if (json == null) {
        return json;
    }
    return {
        
        'url': json['url'],
        'expiresAt': json['expires_at'] == null ? undefined : (new Date(json['expires_at'])),
    };
}

export function PresignedUrlToJSON(value?: PresignedUrl | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'url': value['url'],
        'expires_at': value['expiresAt'] == null ? undefined : ((value['expiresAt']).toISOString()),
    };
}

