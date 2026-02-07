import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindRideSearchResultPage } from './find-ride-search-result.page';

const routes: Routes = [
  {
    path: '',
    component: FindRideSearchResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindRideSearchResultPageRoutingModule {}
