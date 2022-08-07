import { Routes, RouterModule } from '@angular/router';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';


const routes: Routes = [
  { path: "", component: DashboardMainComponent },
];

export const DashboardRoutingRoutes = RouterModule.forChild(routes);
