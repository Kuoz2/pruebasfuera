
import { VerificarTokenService } from './../../Service/verificar-token.service';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Ng2SmartTableModule} from 'ng2-smart-table';
import {CKEditorModule} from 'ngx-ckeditor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ProductsRoutingModule} from './products-routing.module';
import {CategoryComponent} from './physical/category/category.component';
import {SubCategoryComponent} from './physical/sub-category/sub-category.component';
import {AddProductComponent} from './physical/add-product/add-product.component';

import {GalleryModule} from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap';

import {DROPZONE_CONFIG, DropzoneConfigInterface, DropzoneModule} from 'ngx-dropzone-wrapper';
import {SharedModule} from "../../shared/shared.module";
import {ListaproductoComponent} from './physical/listaproducto/listaproducto.component';
import {NgxPaginationModule} from "ngx-pagination";
import {StockComponent} from './physical/stock/stock.component';
import {ProvideerComponent} from './provideer/provideer.component';
import {PromocionesComponent} from './physical/promociones/promociones.component';
import {ImpuestosComponent} from './physical/impuestos/impuestos.component';
import {MarcaComponent} from './physical/marca/marca.component';
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";
import { VencimientosComponent } from './physical/vencimientos/vencimientos.component';
import {NgxSpinnerModule} from "ngx-spinner";
import { CodbarraComponent } from './codbarra/codbarra.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import { FacturaComponent } from './physical/factura/factura.component';
import { ListProvidersComponent } from './list-providers/list-providers.component';
import { ListacomponentesComponent } from './physical/listacomponentes/listacomponentes.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 50,
  url: 'https://httpbin.org/post',
};



@NgModule({
  declarations: [CategoryComponent,
    SubCategoryComponent,
    AddProductComponent,
    ListaproductoComponent,
    StockComponent,
    ProvideerComponent,
    PromocionesComponent,
    ImpuestosComponent,
    MarcaComponent,
    VencimientosComponent,
    CodbarraComponent,
    FacturaComponent,
    ListProvidersComponent,
    ListacomponentesComponent,],
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
        NgxPaginationModule,
        Ng4LoadingSpinnerModule,
        NgxSpinnerModule,
        NgxBarcodeModule,

      ],
  providers: [VerificarTokenService,
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    },
    NgbActiveModal,
  ]
})
export class ProductsModule { }
