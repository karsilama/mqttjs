import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MqttModule } from './mqtt/mqtt.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MqttModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
