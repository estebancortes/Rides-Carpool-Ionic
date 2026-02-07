import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddReturnDescriptionPageRoutingModule } from './add-return-description-routing.module';

import { AddReturnDescriptionPage } from './add-return-description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddReturnDescriptionPageRoutingModule
  ],
  declarations: [AddReturnDescriptionPage]
})
export class AddReturnDescriptionPageModule {}
