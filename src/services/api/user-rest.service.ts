import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { User } from '../../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserRestService extends RestService<User> {
  route = '/user';
}
