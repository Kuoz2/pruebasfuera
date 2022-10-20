import { PanaderiaComponent } from './panaderia/panaderia.component';
import { BuscarvoucheremitComponent } from './buscarvoucheremit/buscarvoucheremit.component';
import { CurrentvoucherComponent } from './currentvoucher/currentvoucher.component';
import { ComparacionVentaComponent } from './comparacion-venta/comparacion-venta.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VoucherCreateComponent} from "./voucher-create/voucher-create.component";
import {ListavoucherComponent} from "./listavoucher/listavoucher.component";
import {MedioComponent} from "./medio/medio.component";
import {ContenedorAppComponent} from "./contenedor-app/contenedor-app.component";
import {BoletaComponent} from "./boleta/boleta.component";
import {CierrecajaComponent} from "./cierrecaja/cierrecaja.component";
import {ListPageComponent} from "./list-page/list-page.component";
import {ActualizarbolComponent} from "./actualizarbol/actualizarbol.component";
import { ImageElementContainer } from 'html2canvas/dist/types/dom/replaced-elements/image-element-container';


const routes: Routes = [
  {
    path: '',
    component: BuscarvoucheremitComponent,
   /* children: [

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
        path:'lista-pago',
        component:ListPageComponent,
        data:{
          title: "Ventas",
          breadcrumb:'Lista de ventas'
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
      },
      {
        path:'boleta',
        component: BoletaComponent,
        data:{
          title:'Boleta',
          breadcrumb:'Boleta'
        }
      },
      {
        path:'cierre',
        component: CierrecajaComponent,
        data:{
          title:'cierre de caja',
          breadcrumb:'caja'
        }
      },
      {
        path: 'actualizar_boleta',
        component: ActualizarbolComponent,
        data:{
          title:' Actualizar boleta',
          breadcrumb: 'Actualizar boleta'
        }
      },
      {
        path: 'comparar',
        component: ComparacionVentaComponent,
        data: {
          title: 'Comparar ventas',
          breadcrumb: 'Compare sus ventas'
        }
      },
      {
        path: 'imagenesventa',
        component: CurrentvoucherComponent,
        data:{
          title:'Generar voucher Minimarket',
          breadcrumb: 'Crear voucher'
        },
      },
    
      {
        path:'panaderia',
        component: PanaderiaComponent,
        data:{
          title: 'Emitir boleta panaderia',
          breadcrumb: 'Emitir panaderia'
        }
      },
      {
        path:'buqueda',
        component: BuscarvoucheremitComponent,
        data:{
          title: 'Buscar un voucher emitidos',
          breadcrumb: 'Buscar voucher'
        }
      },
    ]*/
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
