import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckBookingPageRoutingModule } from './check-booking-routing.module';

import { CheckBookingPage } from './check-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckBookingPageRoutingModule
  ],
  declarations: [CheckBookingPage]
})
export class CheckBookingPageModule {}
