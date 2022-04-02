import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbActiveModal, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DROPZONE_CONFIG, DropzoneConfigInterface, DropzoneModule} from "ngx-dropzone-wrapper";

import { EstacionamientoRoutingModule } from './estacionamiento-routing.module';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 50,
  url: 'https://httpbin.org/post',
};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EstacionamientoRoutingModule,
    DropzoneModule,
    NgbModule,

  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    },
    NgbActiveModal
  ]
})
export class EstacionamientoModule { }
