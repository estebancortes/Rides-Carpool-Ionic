import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassengersOptionPage } from './passengers-option.page';

const routes: Routes = [
  {
    path: '',
    component: PassengersOptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassengersOptionPageRoutingModule {}
