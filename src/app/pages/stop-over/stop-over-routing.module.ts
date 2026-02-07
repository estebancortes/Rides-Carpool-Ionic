import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StopOverPage } from './stop-over.page';

const routes: Routes = [
  {
    path: '',
    component: StopOverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StopOverPageRoutingModule {}
