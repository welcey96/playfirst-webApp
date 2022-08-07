import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MaintenanceGuardService } from './guards/maintenance.guard.service';
import { AuthGuardService } from './guards/auth-guard.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TopBarComponent,
    FooterBarComponent
  ],
  exports: [
    TopBarComponent,
    FooterBarComponent
  ],
  providers:[
    AuthGuardService,
    MaintenanceGuardService
  ]
})
export class SharedModule { }
