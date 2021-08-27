import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { breadcrumbs, BreadcrumbsItem } from './breadcrumbs-list';

@Component({
  selector: 'i-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  items: BreadcrumbsItem[];
  constructor(private router: Router) {
    this.router.events
      .subscribe(
        e => {
          if (e instanceof NavigationEnd) {
            this.items = breadcrumbs[e.url];
            console.log(this.items);
          }
        }
      );
  }
}

