import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { CustomerListComponent } from 'src/app/pages/customer-list/customer-list.component';
import { GraphCardComponent } from 'src/app/components/graph-card/graph-card.component';




@NgModule({
  declarations: [
    DashboardComponent,
    CustomerListComponent,
    GraphCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
  ]
})
export class AdminLayoutModule { }
