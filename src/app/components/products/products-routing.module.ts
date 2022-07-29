import { BreadcrumbComponent } from './../../shared/components/breadcrumb/breadcrumb.component';
import { FacturaComponent } from './physical/factura/factura.component';
import { CodbarraComponent } from './codbarra/codbarra.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from './physical/category/category.component';
import {AddProductComponent} from './physical/add-product/add-product.component';

import {ListaproductoComponent} from "./physical/listaproducto/listaproducto.component";
import {ProvideerComponent} from "./provideer/provideer.component";
import {PromocionesComponent} from "./physical/promociones/promociones.component";
import {ImpuestosComponent} from "./physical/impuestos/impuestos.component";
import {MarcaComponent} from "./physical/marca/marca.component";
import {VencimientosComponent} from "./physical/vencimientos/vencimientos.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'physical/marca',
        component: MarcaComponent,
        data:{
          title:"Marcas",
          breadcrumb: "Marcas"
        }
      },
      {
        path: 'physical/category',
        component: CategoryComponent,
        data: {
          title: "Categoarias",
          breadcrumb: "Categorias"
        }
      },
      {
        path: 'physical/add-product',
        component: AddProductComponent,
        data: {
          title: 'Agregar producto',
          breadcrumb: 'Agregar producto'
        }
      },
      {
        path: 'physical/impuestos',
        component: ImpuestosComponent,
        data:{
          title:'Agregar impuestos',
          breadcrumb: 'Agregar impuestos'
        }
      },
      {
        path: 'physical/lista-editar',
        component: ListaproductoComponent,
        data:{
          title: 'lista y editar producto',
          breadcrumb:'lista editar producto'
        }
       },
      {
        path:'physical/proveedor',
        component: ProvideerComponent,
        data:{
          title:'Ingreso proveedor',
          breadcrumb:'Nuevo Proveedor'
        }
      },
      {
        path:'physical/promociones',
        component: PromocionesComponent,
        data:{
          title:'Crear promociones',
          breadcrumb:'Nuevas promociones'
        }
      },
      {
        path:'physical/vencimiento',
        component: VencimientosComponent,
        data:{
          title:'Vencimiento',
          breadcrumb:'Productos vencidos'
        }
      },
      {
        path:'codigo',
        component: CodbarraComponent,
        data:{
          title: 'Generar código de barra',
          breadcrumb: 'Código de barra'
        }
      },
      {
        path:'presupuesto', 
        component: FacturaComponent,
        data:{
          title: 'Crear presupuesto',
          BreadcrumbComponent:'presupuesto'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
