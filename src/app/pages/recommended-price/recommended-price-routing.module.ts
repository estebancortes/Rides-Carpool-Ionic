import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendedPricePage } from './recommended-price.page';

const routes: Routes = [
  {
    path: '',
    component: RecommendedPricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommendedPricePageRoutingModule {}
