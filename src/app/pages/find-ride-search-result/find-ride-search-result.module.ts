import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindRideSearchResultPageRoutingModule } from './find-ride-search-result-routing.module';

import { FindRideSearchResultPage } from './find-ride-search-result.page';
// import { RatingModule } from 'ngx-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RatingModule,
    FindRideSearchResultPageRoutingModule
  ],
  declarations: [FindRideSearchResultPage]
})
export class FindRideSearchResultPageModule {}
