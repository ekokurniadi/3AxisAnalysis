import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BrowserModule  } from '@angular/platform-browser';
import { CommonModule, } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path:'',
    component:AdminLayoutComponent,
    children:[
      {
        path:'',
        loadChildren:()=>import('src/app/layouts/admin-layout/admin-layout.module').then(m=>m.AdminLayoutModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash:true
    })
  ],
  exports: []
})
export class AppRoutingModule { }
