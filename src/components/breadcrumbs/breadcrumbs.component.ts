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
            for (let key in breadcrumbs) {
              // console.log(e.url.match(key));
              // TODO: 
              // if ()
              // this.items = breadcrumbs[e.url];
            }
          }
        }
      );
  }
}

