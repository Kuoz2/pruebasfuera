import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';
import { content } from './shared/routes/content-routes';
import { ContentLayoutComponent } from './shared/layout/content-layout/content-layout.component';
import {VerificadorService} from "./Service/verificador.service";
import {AuthRoutingModule} from "./components/auth/auth-routing.module";
import {AuthModule} from "./components/auth/auth.module";
import {LoginComponent} from "./components/auth/login/login.component";
import {VerificadorRolService} from "./Service/verificador-rol.service";

const routes: Routes = [


  {
    path: '',
    redirectTo: 'dashboard/default',
    pathMatch: 'full',

  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [VerificadorService,VerificadorRolService],
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
