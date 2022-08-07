import { RouterModule, Routes } from '@angular/router';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { MaintenanceGuardService } from './shared/guards/maintenance.guard.service';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '', component: ShellComponent,
    children: [
      { path: 'maintenance', component: MaintenanceComponent, canActivate: [MaintenanceGuardService] },
      { path: '', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) }
    ]
  },
  { path: '**', redirectTo: ''}
]
export const AppRoutingRoutes = RouterModule.forRoot(routes);
