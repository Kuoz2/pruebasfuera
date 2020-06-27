import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';
import { content } from './shared/routes/content-routes';
import { ContentLayoutComponent } from './shared/layout/content-layout/content-layout.component';

import {LoginComponent} from "./components/auth/login/login.component";
import {VerificadorRoleService} from "./Service/verificador-role.service";
import {VerificadorService} from "./Service/verificador.service";

const routes: Routes = [


  {
    path: '',
    redirectTo: 'dashboard/default',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [VerificadorService],

    children: content
  },

  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
