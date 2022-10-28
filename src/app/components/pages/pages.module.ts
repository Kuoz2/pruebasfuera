import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {CKEditorModule} from 'ngx-ckeditor';

import {PagesRoutingModule} from './pages-routing.module';
import {SharedModule} from "../../shared/shared.module";

import {HoraActualService} from "../../Service/hora-actual.service";
import {QRCodeModule} from "angularx-qrcode";
import {NgxPaginationModule} from "ngx-pagination";
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";
import {NgxSpinnerModule} from "ngx-spinner";
import {NgxPrintModule} from 'ngx-print';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { CurrentvoucherComponent } from './currentvoucher/currentvoucher.component'
import { NgxBarcodeModule } from 'ngx-barcode';
import { BuscarvoucheremitComponent } from './buscarvoucheremit/buscarvoucheremit.component';
import { PanaderiaComponent } from './panaderia/panaderia.component';
import { CalcularTotalVoucherDirective, DestacarDirective } from './calcular-total-voucher.directive';
@NgModule({
  declarations:
      [
     // VoucherCreateComponent,
     // TicketComponent,
      //HacerpagoComponent,
      //ListavoucherComponent,
      //MedioComponent,
      //AppsaleComponent,
      //ListproductComponent,
      //ContenedorAppComponent,
      //BoletaComponent,
      //CierrecajaComponent,
      //ListPageComponent,
      //ActualizarbolComponent,
      //ComparacionVentaComponent,
      CurrentvoucherComponent,
      BuscarvoucheremitComponent,
      PanaderiaComponent,    
      CalcularTotalVoucherDirective,
      DestacarDirective,

      ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        CKEditorModule,
        SharedModule,
        QRCodeModule,
        NgxPaginationModule,
        Ng4LoadingSpinnerModule,
        NgxSpinnerModule,
        NgxPrintModule,
        InfiniteScrollModule,NgxBarcodeModule,
    ],
    providers:[HoraActualService],
    schemas:[
        NO_ERRORS_SCHEMA
    ]
})
export class PagesModule { }
