import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {CKEditorModule} from 'ngx-ckeditor';

import {PagesRoutingModule} from './pages-routing.module';
import {VoucherCreateComponent} from './voucher-create/voucher-create.component';
import {SharedModule} from "../../shared/shared.module";
import {TicketComponent} from './ticket/ticket/ticket.component';
import {HacerpagoComponent} from './hacerpago/hacerpago.component';
import {ListavoucherComponent} from './listavoucher/listavoucher.component';
import {MedioComponent} from './medio/medio.component';
import {AppsaleComponent} from './appsale/appsale.component';
import {ListproductComponent} from './appsale/listproduct/listproduct.component';
import {ContenedorAppComponent} from './contenedor-app/contenedor-app.component';
import {HoraActualService} from "../../Service/hora-actual.service";
import {BoletaComponent} from './boleta/boleta.component';
import {CierrecajaComponent} from './cierrecaja/cierrecaja.component';
import {QRCodeModule} from "angularx-qrcode";
import {ListPageComponent} from "./list-page/list-page.component";
import {NgxPaginationModule} from "ngx-pagination";
import {ActualizarbolComponent} from './actualizarbol/actualizarbol.component';
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";
import {NgxSpinnerModule} from "ngx-spinner";
import {NgxPrintModule} from 'ngx-print';
import { ComparacionVentaComponent } from './comparacion-venta/comparacion-venta.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { CurrentvoucherComponent } from './currentvoucher/currentvoucher.component'
import { NgxBarcodeModule } from 'ngx-barcode';
import { BuscarvoucheremitComponent } from './buscarvoucheremit/buscarvoucheremit.component';
import { PanaderiaComponent } from './panaderia/panaderia.component';
import { CalcularTotalVoucherDirective, DestacarDirective } from './calcular-total-voucher.directive';
@NgModule({
  declarations:
      [
      VoucherCreateComponent,
      TicketComponent,
      HacerpagoComponent,
      ListavoucherComponent,
      MedioComponent,
      AppsaleComponent,
      ListproductComponent,
      ContenedorAppComponent,
      BoletaComponent,
      CierrecajaComponent,
      ListPageComponent,
      ActualizarbolComponent,
      ComparacionVentaComponent,
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
