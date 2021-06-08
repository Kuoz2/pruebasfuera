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
import {NgxPaginationModule} from "ngx-pagination";
import {MermaRoutingModule} from "./merma-routing.module";
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";
import { SolucionMermaComponent } from './solucion-merma/solucion-merma.component';
import {NgxSpinnerModule} from "ngx-spinner";

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 50,
  url: 'https://httpbin.org/post',
};


@NgModule({
  declarations: [MermaComponent, SolucionMermaComponent],

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
        NgxPaginationModule,
        Ng4LoadingSpinnerModule,
        NgxSpinnerModule
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
