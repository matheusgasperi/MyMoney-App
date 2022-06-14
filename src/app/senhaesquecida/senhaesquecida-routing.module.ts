import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenhaesquecidaPage } from './senhaesquecida.page';

const routes: Routes = [
  {
    path: '',
    component: SenhaesquecidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SenhaesquecidaPageRoutingModule {}
