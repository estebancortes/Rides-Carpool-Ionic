import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPriceListPageRoutingModule } from './edit-price-list-routing.module';

import { EditPriceListPage } from './edit-price-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPriceListPageRoutingModule
  ],
  declarations: [EditPriceListPage]
})
export class EditPriceListPageModule {}
