import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

@NgModule({ // configuration object for NgModule decorator
  declarations: [
    PassengerDashboardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PassengerDashboardComponent,
  ]
})
export class PassengerDashboardModule {}