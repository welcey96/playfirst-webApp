import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ShellComponent } from './shell/shell.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { RouterModule } from '@angular/router';
import { AppRoutingRoutes } from './app.routing';
import { StoreModule } from '@ngrx/store';
import { sideBarReducer } from './state/sidebar.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [		
    AppComponent,
      ShellComponent,
      MaintenanceComponent
   ],
  imports: [
    AppRoutingRoutes,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    RouterModule,
    StoreModule.forRoot({ sideBarToggle: sideBarReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
