import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "team", component: TeamComponent },
];

export const DashboardRoutingRoutes = RouterModule.forChild(routes);
