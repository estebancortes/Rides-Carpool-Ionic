import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingConfirmationPage } from './booking-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: BookingConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingConfirmationPageRoutingModule {}
