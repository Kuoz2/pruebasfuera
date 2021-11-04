import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebanavegacionRoutingModule } from './pruebanavegacion-routing.module';
import { BotonesnavegacionComponent } from './botonesnavegacion/botonesnavegacion.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [BotonesnavegacionComponent],
  imports: [
    CommonModule,
    PruebanavegacionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PruebanavegacionModule { }
