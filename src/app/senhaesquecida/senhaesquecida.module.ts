import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SenhaesquecidaPageRoutingModule } from './senhaesquecida-routing.module';

import { SenhaesquecidaPage } from './senhaesquecida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SenhaesquecidaPageRoutingModule
  ],
  declarations: [SenhaesquecidaPage]
})
export class SenhaesquecidaPageModule {}
