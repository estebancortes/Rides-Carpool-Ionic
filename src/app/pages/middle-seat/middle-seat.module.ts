import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiddleSeatPageRoutingModule } from './middle-seat-routing.module';

import { MiddleSeatPage } from './middle-seat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiddleSeatPageRoutingModule
  ],
  declarations: [MiddleSeatPage]
})
export class MiddleSeatPageModule {}
