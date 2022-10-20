import { PagesRoutingModule } from './components/pages/pages-routing.module';
import { BoletaComponent } from './components/pages/boleta/boleta.component';
import { BotonesnavegacionComponent } from './components/pruebanavegacion/botonesnavegacion/botonesnavegacion.component';
import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {content} from './shared/routes/content-routes';
import {ContentLayoutComponent} from './shared/layout/content-layout/content-layout.component';

import {LoginComponent} from "./components/auth/login/login.component";
import {ConconcanService} from "./Service/conconcan.service";
import { PagesModule } from './components/pages/pages.module';
import { PagerComponent } from 'ng2-smart-table/lib/components/pager/pager.component';

const routes: Routes = [
  
  {
    path: '',
    component: PagesModule ,
  //  canActivate: [ConconcanService],
   // children: content,
  },

  {
    path: 'login',
    component: LoginComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'  })
    ],
  exports: [RouterModule, PagesRoutingModule]
})
export class AppRoutingModule { }
