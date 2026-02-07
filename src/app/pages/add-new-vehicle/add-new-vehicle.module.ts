import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewVehiclePageRoutingModule } from './add-new-vehicle-routing.module';

import { AddNewVehiclePage } from './add-new-vehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewVehiclePageRoutingModule
  ],
  declarations: [AddNewVehiclePage]
})
export class AddNewVehiclePageModule {}
