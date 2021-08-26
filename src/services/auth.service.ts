import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // TODO: remove fake
  user$ = new BehaviorSubject<User>(new User('0', 'current user', 'user_u', ''));
  constructor() { }
}
