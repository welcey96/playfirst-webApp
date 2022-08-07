import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ShellComponent } from './shell/shell.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { RouterModule } from '@angular/router';
import { AppRoutingRoutes } from './app.routing';

@NgModule({
  declarations: [		
    AppComponent,
      ShellComponent,
      MaintenanceComponent
   ],
  imports: [
    AppRoutingRoutes,
    BrowserModule,
    SharedModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
