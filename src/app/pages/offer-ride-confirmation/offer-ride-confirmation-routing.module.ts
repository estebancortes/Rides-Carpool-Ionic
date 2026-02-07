import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferRideConfirmationPage } from './offer-ride-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: OfferRideConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferRideConfirmationPageRoutingModule {}
