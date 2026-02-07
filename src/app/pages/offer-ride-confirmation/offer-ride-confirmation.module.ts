import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferRideConfirmationPageRoutingModule } from './offer-ride-confirmation-routing.module';

import { OfferRideConfirmationPage } from './offer-ride-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfferRideConfirmationPageRoutingModule
  ],
  declarations: [OfferRideConfirmationPage]
})
export class OfferRideConfirmationPageModule {}
