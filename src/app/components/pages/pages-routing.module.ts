import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListPageComponent} from './list-page/list-page.component';
import {VoucherCreateComponent} from "./voucher-create/voucher-create.component";
import {ListavoucherComponent} from "./listavoucher/listavoucher.component";
import {MedioComponent} from "./medio/medio.component";
import {ContenedorAppComponent} from "./contenedor-app/contenedor-app.component";


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
        },
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
        path: 'create-voucher',
        component: VoucherCreateComponent,
        data:{
          title: "Crear pago",
          breadcrumb: "Crear pago"
        }
      },
      {
        path:'app-pago',
        component:ContenedorAppComponent,
        data:{
          title:"Pago movil",
          breadcrumb:"App pago"
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
