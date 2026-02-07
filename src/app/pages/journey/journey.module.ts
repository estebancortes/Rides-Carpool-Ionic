import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JourneyPageRoutingModule } from './journey-routing.module';

import { JourneyPage } from './journey.page';
import { ShareableModule } from '@app/components/shareable/shareable.module';
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
    ShareableModule,
    JourneyPageRoutingModule
  ],
  declarations: [JourneyPage]
})
export class JourneyPageModule {}
