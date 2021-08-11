import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../../shared/shared.module';
//import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule} from "@angular/common/http";
import {NgxSpinnerModule} from "ngx-spinner";


@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        NgbModule,
        CarouselModule,
        SharedModule,
        FormsModule,
        HttpClientModule,
        NgxSpinnerModule
    ]
})
export class AuthModule {}
