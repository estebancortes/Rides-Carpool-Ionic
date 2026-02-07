import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecommendedPricePageRoutingModule } from './recommended-price-routing.module';

import { RecommendedPricePage } from './recommended-price.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecommendedPricePageRoutingModule
  ],
  declarations: [RecommendedPricePage]
})
export class RecommendedPricePageModule {}
