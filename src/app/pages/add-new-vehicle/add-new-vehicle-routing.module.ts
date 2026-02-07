import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewVehiclePage } from './add-new-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewVehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewVehiclePageRoutingModule {}
