import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private TOKEN_KEY = 'AUTH_TOKEN';
  private TOKEN_VALUE = null;

  // TODO: remove fake
  user$ = new BehaviorSubject<User>(null);
  //   {
  //     id: 0,
  //     firstName: 'firstName',
  //     lastName: 'lastName',
  //     login: 'login',
  //     role: 'user',
  //     birth: new Date(),
  //     activated: true
  //   } as User
  // );
  constructor() { }

  get TOKEN() {
    return this.TOKEN_VALUE ?? localStorage.getItem(this.TOKEN_KEY);
  }

  login(token: string) {
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
    this.TOKEN_VALUE = token;
  }

  logout() {
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(null));
    this.TOKEN_VALUE = null;
    // this.router.navigateByUrl('/enter');
  }
}
