import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MaintenanceGuardService } from './guards/maintenance.guard.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule, 
    RouterModule
  ],
  declarations: [
    TopBarComponent,
    FooterBarComponent,
    SideBarComponent
  ],
  exports: [
    TopBarComponent,
    FooterBarComponent,
    SideBarComponent
  ],
  providers: [
    AuthGuardService,
    MaintenanceGuardService
  ]
})
export class SharedModule { }
