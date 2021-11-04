import { BotonesnavegacionComponent } from './botonesnavegacion/botonesnavegacion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
      path: '',
      children: [{
        path:'botoncillo',
        component: BotonesnavegacionComponent,
        data: {
        title:  "botones de navegacion",
          breadcrumb: 'Formas de navegacion'
        }
      },

    ]
    }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebanavegacionRoutingModule { }
