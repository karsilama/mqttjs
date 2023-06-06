import { Component } from '@angular/core';
import { MqttClientService } from './mqtt/mqtt-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sayHello() : void {
    return this.mqttClientService.unsafePublish(`Hello from the other side! ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`)
  }
  constructor( public mqttClientService: MqttClientService ){}
}
