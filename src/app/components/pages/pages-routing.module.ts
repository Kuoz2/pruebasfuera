import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './list-page/list-page.component';
import {VoucherCreateComponent} from "./voucher-create/voucher-create.component";
import {HacerpagoComponent} from "./hacerpago/hacerpago.component";
import {ListavoucherComponent} from "./listavoucher/listavoucher.component";
import {MedioComponent} from "./medio/medio.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-page',
        component: ListPageComponent,
        data: {
          title: "List Page",
          breadcrumb: "List Page"
        }
      },

      {
        path: 'medio-pago',
        component: MedioComponent,
        data: {
          title: "Medio de pago",
          breadcrumb: "Formas de pago"
        }
      },


      {
        path: 'create-voucher',
        component: VoucherCreateComponent,
        data:{
          title: "Crear voucher",
          breadcrumb: "Crear voucher"
        }
      },
      {
        path: 'lista-voucher',
        component: ListavoucherComponent,
        data:{
          title: "Lista de voucher",
          breadcrumb: "Listado voucher"
        },
      },
      {
        path: 'crear-pago',
        component: HacerpagoComponent,
        data:{
          title: "Crear pago",
          breadcrumb: "Crear pago"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
