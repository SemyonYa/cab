import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { User } from '../../models/user'
import { HttpClient } from '@angular/common/http';
import { UiService } from '../ui.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRestService extends RestService<any> {
  route = '/auth';

  constructor(http: HttpClient, ui: UiService) {
    super(http, ui);
  }
}
