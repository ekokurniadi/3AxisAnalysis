import { Routes } from '@angular/router';
import { CustomerListComponent } from 'src/app/pages/customer-list/customer-list.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { MonitoringDashboardComponent } from 'src/app/pages/monitoring-dashboard/monitoring-dashboard.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'monitoring-dashboard', component: MonitoringDashboardComponent },
];
