<div align="center">

[![Visit Ably](./header.png)](https://ably.com)

# [Ably](https://ably.com)<a id="ably"></a>

The [REST API specification](https://www.ably.io/documentation/rest-api) for Ably.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`ably.authentication.requestAccessToken`](#ablyauthenticationrequestaccesstoken)
  * [`ably.history.getMessagesByChannel`](#ablyhistorygetmessagesbychannel)
  * [`ably.history.getPresenceHistoryOfChannel`](#ablyhistorygetpresencehistoryofchannel)
  * [`ably.publishing.publishMessagesToChannel`](#ablypublishingpublishmessagestochannel)
  * [`ably.push.deletePushDeviceDetails`](#ablypushdeletepushdevicedetails)
  * [`ably.push.getChannelsWithPushSubscribers`](#ablypushgetchannelswithpushsubscribers)
  * [`ably.push.getPushDeviceDetails`](#ablypushgetpushdevicedetails)
  * [`ably.push.getPushSubscriptionsOnChannels`](#ablypushgetpushsubscriptionsonchannels)
  * [`ably.push.getRegisteredPushDevices`](#ablypushgetregisteredpushdevices)
  * [`ably.push.patchPushDeviceDetails`](#ablypushpatchpushdevicedetails)
  * [`ably.push.publishPushNotificationToDevices`](#ablypushpublishpushnotificationtodevices)
  * [`ably.push.putPushDeviceDetails`](#ablypushputpushdevicedetails)
  * [`ably.push.registerPushDevice`](#ablypushregisterpushdevice)
  * [`ably.push.subscribePushDeviceToChannel`](#ablypushsubscribepushdevicetochannel)
  * [`ably.push.unregisterAllPushDevices`](#ablypushunregisterallpushdevices)
  * [`ably.push.unregisterPushDevice`](#ablypushunregisterpushdevice)
  * [`ably.push.updatePushDeviceDetails`](#ablypushupdatepushdevicedetails)
  * [`ably.stats.getStats`](#ablystatsgetstats)
  * [`ably.stats.getTime`](#ablystatsgettime)
  * [`ably.status.getMetadataOfAllChannels`](#ablystatusgetmetadataofallchannels)
  * [`ably.status.getMetadataOfChannel`](#ablystatusgetmetadataofchannel)
  * [`ably.status.getPresenceOfChannel`](#ablystatusgetpresenceofchannel)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Ably&serviceName=Platform&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Ably } from "ably-platform-typescript-sdk";

const ably = new Ably({
  // Defining the base path is optional and defaults to https://rest.ably.io
  // basePath: "https://rest.ably.io",
  accessToken: "ACCESS_TOKEN",
});

const requestAccessTokenResponse = await ably.authentication.requestAccessToken(
  {
    keyName: "keyName_example",
    xAblyVersion: "string_example",
    format: "json",
    requestBody: null,
  }
);

console.log(requestAccessTokenResponse);
```

## Reference<a id="reference"></a>


### `ably.authentication.requestAccessToken`<a id="ablyauthenticationrequestaccesstoken"></a>

This is the means by which clients obtain access tokens to use the service. You can see how to construct an Ably TokenRequest in the [Ably TokenRequest spec](https://www.ably.io/documentation/rest-api/token-request-spec) documentation, although we recommend you use an Ably SDK rather to create a TokenRequest, as the construction of a TokenRequest is complex. The resulting token response object contains the token properties as defined in Ably TokenRequest spec. Authentication is not required if using a Signed TokenRequest.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestAccessTokenResponse = await ably.authentication.requestAccessToken(
  {
    keyName: "keyName_example",
    xAblyVersion: "string_example",
    format: "json",
    requestBody: null,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### keyName: `string`<a id="keyname-string"></a>

The [key name](https://www.ably.io/documentation/rest-api/token-request-spec#api-key-format) comprises of the app ID and key ID of an API key.

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

##### requestBody: [`RequestAccessTokenRequest`](./models/request-access-token-request.ts)<a id="requestbody-requestaccesstokenrequestmodelsrequest-access-token-requestts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TokenDetails](./models/token-details.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/keys/{keyName}/requestToken` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ably.history.getMessagesByChannel`<a id="ablyhistorygetmessagesbychannel"></a>

Get message history for a channel

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMessagesByChannelResponse = await ably.history.getMessagesByChannel({
  channelId: "channelId_example",
  limit: 100,
  end: "now",
  direction: "backwards",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `string`<a id="channelid-string"></a>

The [Channel\'s ID](https://www.ably.io/documentation/rest/channels).

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

##### start: `string`<a id="start-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### end: `string`<a id="end-string"></a>

##### direction: `'forwards' | 'backwards'`<a id="direction-forwards--backwards"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Message](./models/message.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/messages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ably.history.getPresenceHistoryOfChannel`<a id="ablyhistorygetpresencehistoryofchannel"></a>

Get presence on a channel

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPresenceHistoryOfChannelResponse =
  await ably.history.getPresenceHistoryOfChannel({
    channelId: "channelId_example",
    limit: 100,
    end: "now",
    direction: "backwards",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `string`<a id="channelid-string"></a>

The [Channel\'s ID](https://www.ably.io/documentation/rest/channels).

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

##### start: `string`<a id="start-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### end: `string`<a id="end-string"></a>

##### direction: `'forwards' | 'backwards'`<a id="direction-forwards--backwards"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PresenceMessage](./models/presence-message.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/presence/history` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ably.publishing.publishMessagesToChannel`<a id="ablypublishingpublishmessagestochannel"></a>

Publish a message to the specified channel

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const publishMessagesToChannelResponse =
  await ably.publishing.publishMessagesToChannel({
    channelId: "channelId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `string`<a id="channelid-string"></a>

The [Channel\'s ID](https://www.ably.io/documentation/rest/channels).

##### clientId: `string`<a id="clientid-string"></a>

The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) of the publisher of this message.

##### connectionId: `string`<a id="connectionid-string"></a>

The connection ID of the publisher of this message.

##### data: `string`<a id="data-string"></a>

The string encoded payload, with the encoding specified below.

##### encoding: `string`<a id="encoding-string"></a>

This will typically be empty as all messages received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload.

##### extras: [`Extras`](./models/extras.ts)<a id="extras-extrasmodelsextrasts"></a>

##### id: `string`<a id="id-string"></a>

A Unique ID that can be specified by the publisher for [idempotent publishing](https://www.ably.io/documentation/rest/messages#idempotent).

##### name: `string`<a id="name-string"></a>

The event name, if provided.

##### timestamp: `number`<a id="timestamp-number"></a>

Timestamp when the message was received by the Ably, as milliseconds since the epoch.

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

#### 🔄 Return<a id="🔄-return"></a>

[PublishMessagesToChannel2XXResponse](./models/publish-messages-to-channel2-xxresponse.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/messages` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ably.push.deletePushDeviceDetails`<a id="ablypushdeletepushdevicedetails"></a>

Delete a device details object.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deletePushDeviceDetailsResponse = await ably.push.deletePushDeviceDetails(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

##### channel: `string`<a id="channel-string"></a>

Filter to restrict to subscriptions associated with that channel.

##### deviceId: `string`<a id="deviceid-string"></a>

Must be set when clientId is empty, cannot be used with clientId.

##### clientId: `string`<a id="clientid-string"></a>

Must be set when deviceId is empty, cannot be used with deviceId.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/push/channelSubscriptions` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ably.push.getChannelsWithPushSubscribers`<a id="ablypushgetchannelswithpushsubscribers"></a>

Returns a paginated response of channel names.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getChannelsWithPushSubscribersResponse =
  await ably.push.getChannelsWithPushSubscribers({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/push/channels` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ably.push.getPushDeviceDetails`<a id="ablypushgetpushdevicedetails"></a>

Get the full details of a device.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPushDeviceDetailsResponse = await ably.push.getPushDeviceDetails({
  deviceId: "deviceId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### deviceId: `string`<a id="deviceid-string"></a>

Device\'s ID.

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

#### 🔄 Return<a id="🔄-return"></a>

[DeviceDetails](./models/device-details.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/push/deviceRegistrations/{device_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ably.push.getPushSubscriptionsOnChannels`<a id="ablypushgetpushsubscriptionsonchannels"></a>

Get a list of push notification subscriptions to channels.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPushSubscriptionsOnChannelsResponse =
  await ably.push.getPushSubscriptionsOnChannels({
    limit: 100,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

##### channel: `string`<a id="channel-string"></a>

Filter to restrict to subscriptions associated with that channel.

##### deviceId: `string`<a id="deviceid-string"></a>

Optional filter to restrict to devices associated with that deviceId. Cannot be used with clientId.

##### clientId: `string`<a id="clientid-string"></a>

Optional filter to restrict to devices associated with that clientId. Cannot be used with deviceId.

##### limit: `number`<a id="limit-number"></a>

The maximum number of records to return.

#### 🔄 Return<a id="🔄-return"></a>

[DeviceDetails](./models/device-details.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/push/channelSubscriptions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ably.push.getRegisteredPushDevices`<a id="ablypushgetregisteredpushdevices"></a>

List of device details of devices registed for push notifications.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRegisteredPushDevicesResponse =
  await ably.push.getRegisteredPushDevices({
    limit: 100,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

##### deviceId: `string`<a id="deviceid-string"></a>

Optional filter to restrict to devices associated with that deviceId.

##### clientId: `string`<a id="clientid-string"></a>

Optional filter to restrict to devices associated with that clientId.

##### limit: `number`<a id="limit-number"></a>

The maximum number of records to return.

#### 🔄 Return<a id="🔄-return"></a>

[DeviceDetails](./models/device-details.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/push/deviceRegistrations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ably.push.patchPushDeviceDetails`<a id="ablypushpatchpushdevicedetails"></a>

Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const patchPushDeviceDetailsResponse = await ably.push.patchPushDeviceDetails({
  deviceId: "deviceId_example",
  formFactor: "phone",
  platform: "ios",
  push_state: "Active",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### deviceId: `string`<a id="deviceid-string"></a>

Device\'s ID.

##### clientId: `string`<a id="clientid-string"></a>

Optional trusted client identifier for the device.

##### deviceSecret: `string`<a id="devicesecret-string"></a>

Secret value for the device.

##### formFactor: `string`<a id="formfactor-string"></a>

Form factor of the push device.

##### id: `string`<a id="id-string"></a>

Unique identifier for the device generated by the device itself.

##### metadata: `object`<a id="metadata-object"></a>

Optional metadata object for this device. The metadata for a device may only be set by clients with push-admin privileges and will be used more extensively in the future with smart notifications.

##### platform: `string`<a id="platform-string"></a>

Platform of the push device.

##### push.recipient: [`Recipient`](./models/recipient.ts)<a id="pushrecipient-recipientmodelsrecipientts"></a>

##### push.state: `string`<a id="pushstate-string"></a>

the current state of the push device.

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

#### 🔄 Return<a id="🔄-return"></a>

[DeviceDetails](./models/device-details.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/push/deviceRegistrations/{device_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ably.push.publishPushNotificationToDevices`<a id="ablypushpublishpushnotificationtodevices"></a>

A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const publishPushNotificationToDevicesResponse =
  await ably.push.publishPushNotificationToDevices({
    recipient: {
      transportType: "apns",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### recipient: [`Recipient`](./models/recipient.ts)<a id="recipient-recipientmodelsrecipientts"></a>

##### push: [`Push`](./models/push.ts)<a id="push-pushmodelspushts"></a>

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/push/publish` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ably.push.putPushDeviceDetails`<a id="ablypushputpushdevicedetails"></a>

Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const putPushDeviceDetailsResponse = await ably.push.putPushDeviceDetails({
  deviceId: "deviceId_example",
  formFactor: "phone",
  platform: "ios",
  push_state: "Active",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### deviceId: `string`<a id="deviceid-string"></a>

Device\'s ID.

##### clientId: `string`<a id="clientid-string"></a>

Optional trusted client identifier for the device.

##### deviceSecret: `string`<a id="devicesecret-string"></a>

Secret value for the device.

##### formFactor: `string`<a id="formfactor-string"></a>

Form factor of the push device.

##### id: `string`<a id="id-string"></a>

Unique identifier for the device generated by the device itself.

##### metadata: `object`<a id="metadata-object"></a>

Optional metadata object for this device. The metadata for a device may only be set by clients with push-admin privileges and will be used more extensively in the future with smart notifications.

##### platform: `string`<a id="platform-string"></a>

Platform of the push device.

##### push.recipient: [`Recipient`](./models/recipient.ts)<a id="pushrecipient-recipientmodelsrecipientts"></a>

##### push.state: `string`<a id="pushstate-string"></a>

the current state of the push device.

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

#### 🔄 Return<a id="🔄-return"></a>

[DeviceDetails](./models/device-details.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/push/deviceRegistrations/{device_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ably.push.registerPushDevice`<a id="ablypushregisterpushdevice"></a>

Register a device’s details, including the information necessary to deliver push notifications to it. Requires "push-admin" capability.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const registerPushDeviceResponse = await ably.push.registerPushDevice({
  formFactor: "phone",
  platform: "ios",
  push_state: "Active",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### clientId: `string`<a id="clientid-string"></a>

Optional trusted client identifier for the device.

##### deviceSecret: `string`<a id="devicesecret-string"></a>

Secret value for the device.

##### formFactor: `string`<a id="formfactor-string"></a>

Form factor of the push device.

##### id: `string`<a id="id-string"></a>

Unique identifier for the device generated by the device itself.

##### metadata: `object`<a id="metadata-object"></a>

Optional metadata object for this device. The metadata for a device may only be set by clients with push-admin privileges and will be used more extensively in the future with smart notifications.

##### platform: `string`<a id="platform-string"></a>

Platform of the push device.

##### push.recipient: [`Recipient`](./models/recipient.ts)<a id="pushrecipient-recipientmodelsrecipientts"></a>

##### push.state: `string`<a id="pushstate-string"></a>

the current state of the push device.

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

#### 🔄 Return<a id="🔄-return"></a>

[DeviceDetails](./models/device-details.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/push/deviceRegistrations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ably.push.subscribePushDeviceToChannel`<a id="ablypushsubscribepushdevicetochannel"></a>

Subscribe either a single device or all devices associated with a client ID to receive push notifications from messages sent to a channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const subscribePushDeviceToChannelResponse =
  await ably.push.subscribePushDeviceToChannel({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channel: `string`<a id="channel-string"></a>

Channel name.

##### deviceId: `string`<a id="deviceid-string"></a>

Must be set when clientId is empty, cannot be used with clientId.

##### clientId: `string`<a id="clientid-string"></a>

Must be set when deviceId is empty, cannot be used with deviceId.

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/push/channelSubscriptions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ably.push.unregisterAllPushDevices`<a id="ablypushunregisterallpushdevices"></a>

Unregisters devices. All their subscriptions for receiving push notifications through channels will also be deleted.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unregisterAllPushDevicesResponse =
  await ably.push.unregisterAllPushDevices({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

##### deviceId: `string`<a id="deviceid-string"></a>

Optional filter to restrict to devices associated with that deviceId. Cannot be used with clientId.

##### clientId: `string`<a id="clientid-string"></a>

Optional filter to restrict to devices associated with that clientId. Cannot be used with deviceId.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/push/deviceRegistrations` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ably.push.unregisterPushDevice`<a id="ablypushunregisterpushdevice"></a>

Unregisters a single device by its device ID. All its subscriptions for receiving push notifications through channels will also be deleted.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unregisterPushDeviceResponse = await ably.push.unregisterPushDevice({
  deviceId: "deviceId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### deviceId: `string`<a id="deviceid-string"></a>

Device\'s ID.

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/push/deviceRegistrations/{device_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ably.push.updatePushDeviceDetails`<a id="ablypushupdatepushdevicedetails"></a>

Gets an updated device details object.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePushDeviceDetailsResponse = await ably.push.updatePushDeviceDetails(
  {
    deviceId: "deviceId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### deviceId: `string`<a id="deviceid-string"></a>

Device\'s ID.

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

#### 🔄 Return<a id="🔄-return"></a>

[DeviceDetails](./models/device-details.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/push/deviceRegistrations/{device_id}/resetUpdateToken` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ably.stats.getStats`<a id="ablystatsgetstats"></a>

The Ably system can be queried to obtain usage statistics for a given application, and results are provided aggregated across all channels in use in the application in the specified period. Stats may be used to track usage against account quotas.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStatsResponse = await ably.stats.getStats({
  limit: 100,
  end: "now",
  direction: "backwards",
  unit: "minute",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

##### start: `string`<a id="start-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### end: `string`<a id="end-string"></a>

##### direction: `'forwards' | 'backwards'`<a id="direction-forwards--backwards"></a>

##### unit: `'minute' | 'hour' | 'day' | 'month'`<a id="unit-minute--hour--day--month"></a>

Specifies the unit of aggregation in the returned results.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stats` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ably.stats.getTime`<a id="ablystatsgettime"></a>

This returns the service time in milliseconds since the epoch.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTimeResponse = await ably.stats.getTime({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/time` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ably.status.getMetadataOfAllChannels`<a id="ablystatusgetmetadataofallchannels"></a>

Enumerate all active channels of the application

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMetadataOfAllChannelsResponse =
  await ably.status.getMetadataOfAllChannels({
    limit: 100,
    by: "value",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

##### limit: `number`<a id="limit-number"></a>

##### prefix: `string`<a id="prefix-string"></a>

Optionally limits the query to only those channels whose name starts with the given prefix

##### by: `'value' | 'id'`<a id="by-value--id"></a>

optionally specifies whether to return just channel names (by=id) or ChannelDetails (by=value)

#### 🔄 Return<a id="🔄-return"></a>

[GetMetadataOfAllChannels2XXResponse](./models/get-metadata-of-all-channels2-xxresponse.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ably.status.getMetadataOfChannel`<a id="ablystatusgetmetadataofchannel"></a>

Get metadata of a channel

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMetadataOfChannelResponse = await ably.status.getMetadataOfChannel({
  channelId: "channelId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `string`<a id="channelid-string"></a>

The [Channel\'s ID](https://www.ably.io/documentation/rest/channels).

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

#### 🔄 Return<a id="🔄-return"></a>

[ChannelDetails](./models/channel-details.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `ably.status.getPresenceOfChannel`<a id="ablystatusgetpresenceofchannel"></a>

Get presence on a channel

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPresenceOfChannelResponse = await ably.status.getPresenceOfChannel({
  channelId: "channelId_example",
  limit: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `string`<a id="channelid-string"></a>

The [Channel\'s ID](https://www.ably.io/documentation/rest/channels).

##### xAblyVersion: `string`<a id="xablyversion-string"></a>

The version of the API you wish to use.

##### format: `'json' | 'jsonp' | 'msgpack' | 'html'`<a id="format-json--jsonp--msgpack--html"></a>

The response format you would like

##### clientId: `string`<a id="clientid-string"></a>

##### connectionId: `string`<a id="connectionid-string"></a>

##### limit: `number`<a id="limit-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PresenceMessage](./models/presence-message.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/presence` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
