import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupWithEmailPage } from './signup-with-email.page';

const routes: Routes = [
  {
    path: '',
    component: SignupWithEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupWithEmailPageRoutingModule {}
