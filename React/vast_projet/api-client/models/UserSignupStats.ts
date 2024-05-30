/* tslint:disable */
/* eslint-disable */
/**
 * My VAST App
 * Video, Audio, Text and Speech Converter
 *
 * The version of the OpenAPI document: 0.1.0
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
 * @interface UserSignupStats
 */
export interface UserSignupStats {
    /**
     * 
     * @type {Date}
     * @memberof UserSignupStats
     */
    date: Date;
    /**
     * 
     * @type {number}
     * @memberof UserSignupStats
     */
    count: number;
}

/**
 * Check if a given object implements the UserSignupStats interface.
 */
export function instanceOfUserSignupStats(value: object): boolean {
    if (!('date' in value)) return false;
    if (!('count' in value)) return false;
    return true;
}

export function UserSignupStatsFromJSON(json: any): UserSignupStats {
    return UserSignupStatsFromJSONTyped(json, false);
}

export function UserSignupStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSignupStats {
    if (json == null) {
        return json;
    }
    return {
        
        'date': (new Date(json['date'])),
        'count': json['count'],
    };
}

export function UserSignupStatsToJSON(value?: UserSignupStats | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'date': ((value['date']).toISOString().substring(0,10)),
        'count': value['count'],
    };
}

