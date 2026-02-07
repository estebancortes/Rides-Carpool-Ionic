import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckBookingPage } from './check-booking.page';

const routes: Routes = [
  {
    path: '',
    component: CheckBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckBookingPageRoutingModule {}
