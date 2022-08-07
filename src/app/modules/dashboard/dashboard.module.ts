import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingRoutes } from './dashboard.routing';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingRoutes,
    CarouselModule,
    SharedModule
  ],
  declarations: [DashboardMainComponent]
})
export class DashboardModule { }
