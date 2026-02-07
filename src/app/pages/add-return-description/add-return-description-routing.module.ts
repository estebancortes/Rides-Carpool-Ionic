import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddReturnDescriptionPage } from './add-return-description.page';

const routes: Routes = [
  {
    path: '',
    component: AddReturnDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddReturnDescriptionPageRoutingModule {}
