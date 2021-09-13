import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { titleAnimation } from 'src/animations/title.animation';
import { MenuItem } from 'src/components/menu-item/menu-item.component';
import { AuthRestService } from 'src/services/api/auth.rest.service';
import { AuthService } from 'src/services/auth.service';
import * as pkg from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [titleAnimation]
})
export class AppComponent {
  title = 'Administrator cab';
  // isEnter: boolean;
  version: string;
  modalShown: boolean = false;

  menu: MenuItem[] = [
    { id: 1, title: 'Home', route: 'home', expanded: false },
    { id: 7, title: 'About page', route: 'about', expanded: false },
    {
      id: 2, title: 'Articles', route: 'articles/list', expanded: false, children: [
        { id: 21, title: 'Add', route: 'articles/add', expanded: false, children: [] },
      ]
    },
    { id: 3, title: 'Filials', route: 'filials', expanded: false },
    {
      id: 4, title: 'Users', route: 'users', expanded: false, children: [
        { id: 41, title: 'Add', route: 'users/add', expanded: false, children: [] },
        { id: 42, title: 'Locked', route: 'users/locked', expanded: false, children: [] },
      ]
    },
    { id: 5, title: 'Profile', route: 'profile', expanded: false },
    { id: 6, title: 'Logout', expanded: false, action: this.showModal.bind(this) },
  ];

  get authorized(): boolean {
    return !!this.authService.TOKEN;
  }

  constructor(
    private authRest: AuthRestService,
    private router: Router,
    private authService: AuthService
  ) {
    // this.router.events
    //   .subscribe(
    //     e => {
    //       if (e instanceof NavigationEnd) {
    //         this.isEnter = e.url === 'enter' || e.urlAfterRedirects === 'enter';
    //       }
    //     }
    //   );

    this.version = pkg.version;
  }

  showModal() {
    this.modalShown = true;
  }

  hideModal() {
    this.modalShown = false;
  }

  logout() {
    this.modalShown = false;
    this.authRest.delete(0)
      .subscribe(
        res => {
          this.authService.logout();
          this.router.navigateByUrl('/');
        },
        err => {
          this.authService.logout();
          this.router.navigateByUrl('/');
        }
      );
  }
}
