import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Ng2Rut} from "ng2-rut";

import {Ng2SmartTableModule} from 'ng2-smart-table';
import {UsersRoutingModule} from './users-routing.module';
import {ListUserComponent} from './list-user/list-user.component';
import {CreateUserComponent} from './create-user/create-user.component';

import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [ListUserComponent, CreateUserComponent],
    imports: [
        CommonModule,
        NgbModule,
        Ng2SmartTableModule,
        ReactiveFormsModule,
        UsersRoutingModule,
        Ng2Rut,
        NgxPaginationModule,
    ]
})
export class UsersModule { }
