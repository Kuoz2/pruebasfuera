import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateUserComponent} from './create-user/create-user.component';
import {VerificadorService} from '../../Service/verificador.service';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'create-user',
        component: CreateUserComponent,
        data: {
          title: 'Create User',
          breadcrumb: 'Create User'
        },
        canActivate: [VerificadorService],
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
