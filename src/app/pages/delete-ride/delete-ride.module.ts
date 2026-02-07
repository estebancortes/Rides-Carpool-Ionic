import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteRidePageRoutingModule } from './delete-ride-routing.module';

import { DeleteRidePage } from './delete-ride.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteRidePageRoutingModule
  ],
  declarations: [DeleteRidePage]
})
export class DeleteRidePageModule {}
