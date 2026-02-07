import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPriceListPage } from './edit-price-list.page';

const routes: Routes = [
  {
    path: '',
    component: EditPriceListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPriceListPageRoutingModule {}
