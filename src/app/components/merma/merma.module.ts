import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MermaComponent} from './merma/merma.component';
import {DROPZONE_CONFIG, DropzoneConfigInterface, DropzoneModule} from "ngx-dropzone-wrapper";
import {NgbActiveModal, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CKEditorModule} from "ngx-ckeditor";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {GalleryModule} from "@ks89/angular-modal-gallery";
import {SharedModule} from "../../shared/shared.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgxPaginationModule} from "ngx-pagination";
import {MermaRoutingModule} from "./merma-routing.module";

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 50,
  url: 'https://httpbin.org/post',
};


@NgModule({
  declarations: [MermaComponent],

  imports: [
    CommonModule,
    FormsModule,
    MermaRoutingModule,
    ReactiveFormsModule,
    CKEditorModule,
    Ng2SmartTableModule,
    NgbModule,
    DropzoneModule,
    GalleryModule.forRoot(),
    SharedModule,
    NgxDatatableModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    },
    NgbActiveModal
  ]
})
export class MermaModule { }
