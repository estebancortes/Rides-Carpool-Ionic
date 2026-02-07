import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalPassengersPage } from './total-passengers.page';

const routes: Routes = [
  {
    path: '',
    component: TotalPassengersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalPassengersPageRoutingModule {}
