import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StopOverLocationPageRoutingModule } from './stop-over-location-routing.module';

import { StopOverLocationPage } from './stop-over-location.page';
import { AgmCoreModule } from '@agm/core';
import { AgmOverlays } from 'agm-overlays';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StopOverLocationPageRoutingModule,
    AgmCoreModule,
    AgmOverlays
  ],
  declarations: [StopOverLocationPage]
})
export class StopOverLocationPageModule { }
