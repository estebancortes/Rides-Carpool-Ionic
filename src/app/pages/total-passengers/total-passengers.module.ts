import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalPassengersPageRoutingModule } from './total-passengers-routing.module';

import { TotalPassengersPage } from './total-passengers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalPassengersPageRoutingModule
  ],
  declarations: [TotalPassengersPage]
})
export class TotalPassengersPageModule {}
