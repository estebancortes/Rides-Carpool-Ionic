import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InboxPageRoutingModule } from './inbox-routing.module';

import { InboxPage } from './inbox.page';
import { ShareableModule } from '@app/components/shareable/shareable.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareableModule,
    InboxPageRoutingModule
  ],
  declarations: [InboxPage]
})
export class InboxPageModule {}
