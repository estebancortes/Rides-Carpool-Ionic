import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StopOverLocationPage } from './stop-over-location.page';

const routes: Routes = [
  {
    path: '',
    component: StopOverLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StopOverLocationPageRoutingModule {}
