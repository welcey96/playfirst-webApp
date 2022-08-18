import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingRoutes } from './dashboard.routing';
import { MainComponent } from './main/main.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SharedModule } from '../../shared/shared.module';
import { TeamComponent } from './team/team.component';


@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    SharedModule,
    DashboardRoutingRoutes,
  ],
  declarations: 
  [
    MainComponent,
    TeamComponent,
  ]
})
export class DashboardModule { }
