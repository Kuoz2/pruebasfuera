import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './physical/category/category.component';
import { SubCategoryComponent } from './physical/sub-category/sub-category.component';
import { AddProductComponent } from './physical/add-product/add-product.component';

import {MarcaComponent} from "./physical/marca/marca/marca.component";
import {ListaproductoComponent} from "./physical/listaproducto/listaproducto.component";

const routes: Routes = [
  {
    path: '',
    children: [
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
        path: 'physical/agregar-marca',
        component: MarcaComponent,
        data:{
          title: "Marca",
          breadcrumb: "Marca"
        }
      },
      {
        path: 'physical/sub-category',
        component: SubCategoryComponent,
        data: {
          title: "Sub Category",
          breadcrumb: "Sub Category"
        }
      },
      {
        path: 'physical/lista-editar',
        component: ListaproductoComponent,
        data:{
          title: 'lista y editar producto',
          breadcrumb:'lista editar producto'
        }
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
