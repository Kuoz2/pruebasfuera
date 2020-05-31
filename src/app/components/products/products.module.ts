import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CKEditorModule } from 'ngx-ckeditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductsRoutingModule } from './products-routing.module';
import { CategoryComponent } from './physical/category/category.component';
import { SubCategoryComponent } from './physical/sub-category/sub-category.component';
import { AddProductComponent } from './physical/add-product/add-product.component';

import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { MarcaComponent } from './physical/marca/marca/marca.component';
import {SharedModule} from "../../shared/shared.module";
import { ListaproductoComponent } from './physical/listaproducto/listaproducto.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgxPaginationModule} from "ngx-pagination";
import { StockComponent } from './physical/stock/stock.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 50,
  url: 'https://httpbin.org/post',
};



@NgModule({
  declarations: [CategoryComponent,
    SubCategoryComponent,
    AddProductComponent,
    MarcaComponent,
    ListaproductoComponent,
    StockComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CKEditorModule,
        ProductsRoutingModule,
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
export class ProductsModule { }
