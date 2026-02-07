import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassengersOptionPageRoutingModule } from './passengers-option-routing.module';

import { PassengersOptionPage } from './passengers-option.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassengersOptionPageRoutingModule
  ],
  declarations: [PassengersOptionPage]
})
export class PassengersOptionPageModule {}
