import {NgModule} from '@angular/core';
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
      BoletaComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        CKEditorModule,
        SharedModule,

    ],
    providers:[HoraActualService]
})
export class PagesModule { }
