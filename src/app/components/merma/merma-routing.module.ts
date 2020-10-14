import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MermaComponent} from "./merma/merma.component";

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
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class MermaRoutingModule { }
