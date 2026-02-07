import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookInstantlyPageRoutingModule } from './book-instantly-routing.module';

import { BookInstantlyPage } from './book-instantly.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookInstantlyPageRoutingModule
  ],
  declarations: [BookInstantlyPage]
})
export class BookInstantlyPageModule {}
