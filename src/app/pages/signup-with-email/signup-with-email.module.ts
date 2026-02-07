import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupWithEmailPageRoutingModule } from './signup-with-email-routing.module';

import { SignupWithEmailPage } from './signup-with-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupWithEmailPageRoutingModule
  ],
  declarations: [SignupWithEmailPage]
})
export class SignupWithEmailPageModule {}
