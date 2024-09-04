import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormMascotasPage } from './form-mascotas.page';

const routes: Routes = [
  {
    path: '',
    component: FormMascotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormMascotasPageRoutingModule {}
