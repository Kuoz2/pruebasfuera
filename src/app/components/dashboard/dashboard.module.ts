import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CountToModule } from 'angular-count-to';
import { ChartsModule } from 'ng2-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartistModule } from 'ng-chartist';
import { SharedModule } from '../../shared/shared.module';
import {NgxPaginationModule} from "ngx-pagination";
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";
import {NgxSpinnerModule} from "ngx-spinner";


@NgModule({
  declarations: [DashboardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        CountToModule,
        SharedModule,
        ChartsModule,
        Ng2GoogleChartsModule,
        NgxChartsModule,
        ChartistModule,
        NgxPaginationModule,
        Ng4LoadingSpinnerModule,
        NgxSpinnerModule,
    ]
})
export class DashboardModule { }
