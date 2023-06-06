import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MqttClientService } from './mqtt-client.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [MqttClientService]
})
export class MqttModule { }
