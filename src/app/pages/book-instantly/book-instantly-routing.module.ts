import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookInstantlyPage } from './book-instantly.page';

const routes: Routes = [
  {
    path: '',
    component: BookInstantlyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookInstantlyPageRoutingModule {}
