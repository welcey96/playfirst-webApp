import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingRoutes } from './dashboard.routing';
import { MainComponent } from './main/main.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingRoutes,
    CarouselModule,
    SharedModule
  ],
  declarations: [MainComponent]
})
export class DashboardModule { }
