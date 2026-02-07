import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComingBackPage } from './coming-back.page';

const routes: Routes = [
  {
    path: '',
    component: ComingBackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComingBackPageRoutingModule {}
