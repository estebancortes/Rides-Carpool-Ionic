import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapPageRoutingModule } from './map-routing.module';

import { MapPage } from './map.page';
import { AgmCoreModule } from '@agm/core';
import { AgmOverlays } from 'agm-overlays';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule,
    AgmCoreModule,
    AgmOverlays
  ],
  declarations: [MapPage]
})
export class MapPageModule {}
