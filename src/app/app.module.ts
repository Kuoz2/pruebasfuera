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
import {LocalizationModule} from './components/localization/localization.module';
import {SettingModule} from './components/setting/setting.module';
import {ReportsModule} from './components/reports/reports.module';
import {AuthModule} from './components/auth/auth.module';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {Ng2Rut} from "ng2-rut";
import {MermaModule} from "./components/merma/merma.module";
import {HoraActualService} from "./Service/hora-actual.service";
import {PruebaRelojComponent} from "./components/prueba-reloj/prueba-reloj.component";

@NgModule({
  declarations: [
    AppComponent,
    PruebaRelojComponent
  ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule.withServerTransition( {appId: 'serverApp'} ),
        AppRoutingModule,
        DashboardModule,
        SettingModule,
        ReportsModule,
        AuthModule,
        SharedModule,
        LocalizationModule,
        ProductsModule,
        PagesModule,
        UsersModule,
        ReactiveFormsModule,
        HttpClientModule,
        Ng2Rut,
        MermaModule,
        FormsModule

    ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}, HoraActualService],
  bootstrap: [AppComponent]
})
export class AppModule { }
