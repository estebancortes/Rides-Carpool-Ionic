import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteRidePage } from './delete-ride.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteRidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteRidePageRoutingModule {}
