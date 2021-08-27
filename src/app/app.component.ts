import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'src/components/menu-item/menu-item.component';
import * as pkg from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Administrator cab';
  isEnter: boolean;
  version: string;
  modalShown: boolean = false;

  menu: MenuItem[] = [
    { id: 1, title: 'Home', route: 'home', expanded: false },
    {
      id: 2, title: 'Users', route: 'users', expanded: false, children: [
        { id: 21, title: 'Add', route: 'users/add', expanded: false, children: [] },
        { id: 22, title: 'Locked', route: 'users/locked', expanded: false, children: [] },
      ]
    },
    { id: 3, title: 'Profile', route: 'profile', expanded: false },
    { id: 4, title: 'Logout', expanded: false, action: this.showModal.bind(this) },
  ];

  constructor(private router: Router) {
    this.router.events
      .subscribe(
        e => {
          if (e instanceof NavigationEnd) {
            this.isEnter = e.url === 'enter' || e.urlAfterRedirects === 'enter';
          }
        }
      );

    this.version = pkg.version;
  }

  showModal() {
    this.modalShown = true;
  }

  hideModal() {
    this.modalShown = false;
  }

  logout() {
    console.log('logout');
    this.modalShown = false;
    this.router.navigateByUrl('/');
  }
}
