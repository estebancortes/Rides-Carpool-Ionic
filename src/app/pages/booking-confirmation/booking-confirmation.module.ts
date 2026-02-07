import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ProgressBarModule } from 'angular-progress-bar';

import { BookingConfirmationPageRoutingModule } from './booking-confirmation-routing.module';

import { BookingConfirmationPage } from './booking-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressBarModule,
    BookingConfirmationPageRoutingModule
  ],
  declarations: [BookingConfirmationPage]
})
export class BookingConfirmationPageModule {}
