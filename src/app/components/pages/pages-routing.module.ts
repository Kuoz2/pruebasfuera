import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BuscarvoucheremitComponent } from './buscarvoucheremit/buscarvoucheremit.component';


const routes: Routes = [
  {
    path: '',
    component: BuscarvoucheremitComponent,
   /*children: [

  
    
  
   
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
