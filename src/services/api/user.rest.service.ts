import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { User } from '../../models/user'
import { HttpClient } from '@angular/common/http';
import { UiService } from '../ui.service';

@Injectable({
  providedIn: 'root'
})
export class UserRestService extends RestService<User> {
  route = '/users';

  constructor(http: HttpClient, ui: UiService) {
    super(http, ui);
  }
}
