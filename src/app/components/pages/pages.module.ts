import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { PagesRoutingModule } from './pages-routing.module';
import { ListPageComponent } from './list-page/list-page.component';
import { VoucherCreateComponent } from './voucher-create/voucher-create.component';
import {SharedModule} from "../../shared/shared.module";
import { TicketComponent } from './ticket/ticket/ticket.component';
import { HacerpagoComponent } from './hacerpago/hacerpago.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import { ListavoucherComponent } from './listavoucher/listavoucher.component';
import { MedioComponent } from './medio/medio.component';
@NgModule({
  declarations: [ListPageComponent, VoucherCreateComponent, TicketComponent, HacerpagoComponent, ListavoucherComponent, MedioComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        CKEditorModule,
        NgxDatatableModule,
        SharedModule,
        NgxBarcodeModule
    ]
})
export class PagesModule { }
