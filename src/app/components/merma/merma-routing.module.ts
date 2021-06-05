import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MermaComponent} from "./merma/merma.component";
import {SolucionMermaComponent} from "./solucion-merma/solucion-merma.component";

const routes: Routes = [{
  path: '',
  children:[
    {
      path:'ingresar',
      component: MermaComponent,
      data: {
        title: 'Merma Administrativa',
        breadcrumb: 'Merma'
      }
    },
    {
      path:'solucion-merma',
      component: SolucionMermaComponent,
      data:{
        title: 'Soluciones de las mermas',
        breadcrumb: 'Solucion'
      }
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class MermaRoutingModule { }
