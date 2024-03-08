/*
Platform API

The [REST API specification](https://www.ably.io/documentation/rest-api) for Ably.

The version of the OpenAPI document: 1.1.0
Contact: support@ably.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Extras } from './extras';

/**
 * Message object.
 * @export
 * @interface Message
 */
export interface Message {
    /**
     * The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) of the publisher of this message.
     * @type {string}
     * @memberof Message
     */
    'clientId'?: string;
    /**
     * The connection ID of the publisher of this message.
     * @type {string}
     * @memberof Message
     */
    'connectionId'?: string;
    /**
     * The string encoded payload, with the encoding specified below.
     * @type {string}
     * @memberof Message
     */
    'data'?: string;
    /**
     * This will typically be empty as all messages received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload.
     * @type {string}
     * @memberof Message
     */
    'encoding'?: string;
    /**
     * 
     * @type {Extras}
     * @memberof Message
     */
    'extras'?: Extras;
    /**
     * A Unique ID that can be specified by the publisher for [idempotent publishing](https://www.ably.io/documentation/rest/messages#idempotent).
     * @type {string}
     * @memberof Message
     */
    'id'?: string;
    /**
     * The event name, if provided.
     * @type {string}
     * @memberof Message
     */
    'name'?: string;
    /**
     * Timestamp when the message was received by the Ably, as milliseconds since the epoch.
     * @type {number}
     * @memberof Message
     */
    'timestamp'?: number;
}

