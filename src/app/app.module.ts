import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {PagesModule} from './components/pages/pages.module';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {NgxPrintModule} from 'ngx-print'
import {InfiniteScrollModule} from 'ngx-infinite-scroll'
import { NgxBarcodeModule } from 'ngx-barcode';
import { CookieService } from 'ngx-cookie-service';
import { SharedModule } from './shared/shared.module';
 @NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule.withServerTransition( {appId: 'serverApp'} ),
        AppRoutingModule,
       // DashboardModule,
        //AuthModule,
        SharedModule,
       // ProductsModule,
        PagesModule,
        //UsersModule,
        ReactiveFormsModule,
        HttpClientModule,
       // MermaModule,
        FormsModule,
        NgxPrintModule,
        InfiniteScrollModule,
        NgxBarcodeModule,
       // EstacionamientoModule,
        

    ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}, CookieService],
  bootstrap: [AppComponent],
  
})
export class AppModule {  }
