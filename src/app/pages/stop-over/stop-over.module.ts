import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StopOverPageRoutingModule } from './stop-over-routing.module';

import { StopOverPage } from './stop-over.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StopOverPageRoutingModule
  ],
  declarations: [StopOverPage]
})
export class StopOverPageModule {}
