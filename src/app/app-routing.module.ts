import { PagesRoutingModule } from './components/pages/pages-routing.module';
import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { PagesModule } from './components/pages/pages.module';

const routes: Routes = [
  
  {
    path: '',
    component: PagesModule ,
  //  canActivate: [ConconcanService],
   // children: content,
  },

 // {
   // path: 'login',
    //component: LoginComponent
  //},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'  })
    ],
  exports: [RouterModule, PagesRoutingModule]
})
export class AppRoutingModule { }
