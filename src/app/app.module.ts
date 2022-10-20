import { EstacionamientoModule } from './components/estacionamiento/estacionamiento.module';
import { VerificadorRoleService } from './Service/verificador-role.service';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {DashboardModule} from './components/dashboard/dashboard.module';
import {SharedModule} from './shared/shared.module';
import {ProductsModule} from './components/products/products.module';
import {PagesModule} from './components/pages/pages.module';
import {UsersModule} from './components/users/users.module';
import {AuthModule} from './components/auth/auth.module';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {MermaModule} from "./components/merma/merma.module";
import {NgxPrintModule} from 'ngx-print'
import {InfiniteScrollModule} from 'ngx-infinite-scroll'
import { NgxBarcodeModule } from 'ngx-barcode';
import { CookieService } from 'ngx-cookie-service';
 @NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule.withServerTransition( {appId: 'serverApp'} ),
        AppRoutingModule,
       // DashboardModule,
        AuthModule,
        SharedModule,
        ProductsModule,
        PagesModule,
        UsersModule,
        ReactiveFormsModule,
        HttpClientModule,
       // MermaModule,
        FormsModule,
        NgxPrintModule,
        InfiniteScrollModule,
        NgxBarcodeModule,
        EstacionamientoModule,
        

    ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}, CookieService],
  bootstrap: [AppComponent],
  
})
export class AppModule {  }
