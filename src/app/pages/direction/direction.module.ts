import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectionPageRoutingModule } from './direction-routing.module';

import { DirectionPage } from './direction.page';
import { AgmCoreModule } from '@agm/core';
import { AgmOverlays } from 'agm-overlays';
import { AgmDirectionModule } from 'agm-direction';
import { ShareableModule } from '@app/components/shareable/shareable.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule,
    ShareableModule,
    AgmDirectionModule,
    AgmOverlays,
    DirectionPageRoutingModule
  ],
  declarations: [DirectionPage]
})
export class DirectionPageModule {}
