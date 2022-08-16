import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: "", component: MainComponent },
];

export const DashboardRoutingRoutes = RouterModule.forChild(routes);
