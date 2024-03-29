/*
Platform API

The [REST API specification](https://www.ably.io/documentation/rest-api) for Ably.

The version of the OpenAPI document: 1.1.0
Contact: support@ably.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  AuthenticationApi,
  HistoryApi,
  PublishingApi,
  PushApi,
  StatsApi,
  StatusApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { AblyCustom } from "./client-custom";

export class Ably extends AblyCustom {
  readonly authentication: AuthenticationApi;
  readonly history: HistoryApi;
  readonly publishing: PublishingApi;
  readonly push: PushApi;
  readonly stats: StatsApi;
  readonly status: StatusApi;

  constructor(configurationParameters: ConfigurationParameters = {}) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.authentication = new AuthenticationApi(configuration);
    this.history = new HistoryApi(configuration);
    this.publishing = new PublishingApi(configuration);
    this.push = new PushApi(configuration);
    this.stats = new StatsApi(configuration);
    this.status = new StatusApi(configuration);
  }

}
