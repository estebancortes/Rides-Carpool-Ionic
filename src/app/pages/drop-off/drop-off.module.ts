import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DropOffPageRoutingModule } from './drop-off-routing.module';

import { DropOffPage } from './drop-off.page';
import { AgmCoreModule } from '@agm/core';
import { AgmOverlays } from 'agm-overlays';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DropOffPageRoutingModule,
    AgmCoreModule,
    AgmOverlays
  ],
  declarations: [DropOffPage]
})
export class DropOffPageModule { }
