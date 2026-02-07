import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiddleSeatPage } from './middle-seat.page';

const routes: Routes = [
  {
    path: '',
    component: MiddleSeatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiddleSeatPageRoutingModule {}
