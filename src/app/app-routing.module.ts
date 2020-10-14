import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {content} from './shared/routes/content-routes';
import {ContentLayoutComponent} from './shared/layout/content-layout/content-layout.component';

import {LoginComponent} from "./components/auth/login/login.component";

const routes: Routes = [



  {
    path: '',
    component: ContentLayoutComponent,
    children: content,
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
