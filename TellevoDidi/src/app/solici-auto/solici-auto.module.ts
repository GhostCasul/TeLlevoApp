import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoliciAutoPageRoutingModule } from './solici-auto-routing.module';

import { SoliciAutoPage } from './solici-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoliciAutoPageRoutingModule
  ],
  declarations: [SoliciAutoPage]
})
export class SoliciAutoPageModule {}
