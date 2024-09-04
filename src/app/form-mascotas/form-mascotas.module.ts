import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormMascotasPageRoutingModule } from './form-mascotas-routing.module';

import { FormMascotasPage } from './form-mascotas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormMascotasPageRoutingModule
  ],
  declarations: [FormMascotasPage]
})
export class FormMascotasPageModule {}
