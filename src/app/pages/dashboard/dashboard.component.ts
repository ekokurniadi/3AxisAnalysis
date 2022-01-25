import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard/dealer',
    title: 'Dealer',
    icon: 'ni-tv-2 text-primary',
    class: '',
  },
  {
    path: '/dashboard/time-periode',
    title: 'Time Periode',
    icon: 'ni-planet text-blue',
    class: '',
  },
  {
    path: '/dashboard/profesi',
    title: 'Profesi',
    icon: 'ni-pin-3 text-orange',
    class: '',
  },
  {
    path: '/dashboard/tipe-motor',
    title: 'Tipe Motor',
    icon: 'ni-single-02 text-yellow',
    class: '',
  },
  {
    path: '/dashboard/versi-demand',
    title: 'Versi Demand',
    icon: 'ni-bullet-list-67 text-red',
    class: '',
  },
  {
    path: '/dashboard/item',
    title: 'Item',
    icon: 'ni-key-25 text-info',
    class: '',
  },
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public menuItems: any[] = [];
  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  selectedIndex: number = 0;

  setIndex(index: number) {
    this.selectedIndex = index;
  }
}
