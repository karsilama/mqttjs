import { Injectable } from '@angular/core';
import * as mqtt from "precompiled-mqtt";

const MQTT_TOPIC = 'mqttHQ-client-test';

/**
 * https://mqtthq.com/
 */

export const MQTT_SERVICE_OPTIONS: mqtt.IClientOptions = {
  hostname: 'public.mqtthq.com',
  port: 8083,
  path: '/mqtt',
  protocol: 'ws'
};

/**
 * https://www.hivemq.com/demos/websocket-client/
 */

// export const MQTT_SERVICE_OPTIONS: mqtt.IClientOptions = {
//   hostname: 'mqtt-dashboard.com',
//   port: 8884,
//   path: '/mqtt',
//   protocol: 'wss',
//   clientId: 'clientId-LJGaeJ2V81'
// };

@Injectable()
export class MqttClientService {

  message: string;
  client: mqtt.MqttClient;

  constructor() {

    this.client = mqtt.connect(MQTT_SERVICE_OPTIONS);

    this.client.on('connect', () => {
      this.client.subscribe(MQTT_TOPIC, (err) => {
        console.log(err);
      });
    });

    this.client.on('message', (topic, message) => {
      this.message = `${topic}: ${message.toString()}`;
    });

  }

  unsafePublish(message: string): void {
    this.client.publish(MQTT_TOPIC, message);
  }

}
