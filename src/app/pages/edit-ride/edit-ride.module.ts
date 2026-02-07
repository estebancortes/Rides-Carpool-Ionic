import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRidePageRoutingModule } from './edit-ride-routing.module';

import { EditRidePage } from './edit-ride.page';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { AgmOverlays } from 'agm-overlays';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule,
    AgmDirectionModule,
    AgmOverlays,
    EditRidePageRoutingModule
  ],
  declarations: [EditRidePage]
})
export class EditRidePageModule {}
