import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoliciAutoPage } from './solici-auto.page';

const routes: Routes = [
  {
    path: '',
    component: SoliciAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoliciAutoPageRoutingModule {}
