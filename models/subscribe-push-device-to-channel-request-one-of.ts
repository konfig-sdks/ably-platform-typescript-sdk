/*
Platform API

The [REST API specification](https://www.ably.io/documentation/rest-api) for Ably.

The version of the OpenAPI document: 1.1.0
Contact: support@ably.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface SubscribePushDeviceToChannelRequestOneOf
 */
export interface SubscribePushDeviceToChannelRequestOneOf {
    /**
     * Channel name.
     * @type {string}
     * @memberof SubscribePushDeviceToChannelRequestOneOf
     */
    'channel'?: string;
    /**
     * Must be set when clientId is empty, cannot be used with clientId.
     * @type {string}
     * @memberof SubscribePushDeviceToChannelRequestOneOf
     */
    'deviceId'?: string;
}

