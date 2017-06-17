import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    // angular module
    BrowserModule,

    // feature modules
    PassengerDashboardModule,
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {}
