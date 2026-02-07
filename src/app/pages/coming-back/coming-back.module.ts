import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComingBackPageRoutingModule } from './coming-back-routing.module';

import { ComingBackPage } from './coming-back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComingBackPageRoutingModule
  ],
  declarations: [ComingBackPage]
})
export class ComingBackPageModule {}
