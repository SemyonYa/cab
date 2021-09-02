import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { User } from '../../models/user'
import { HttpClient } from '@angular/common/http';
import { UiService } from '../ui.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthRestService extends RestService<any> {
  route = '/auth';

  constructor(http: HttpClient, ui: UiService) {
    super(http, ui);
  }

  login(item: LoginViewModel): Observable<string> {
    return this.http.post<string>(`${this.url}/login`, this.formValueToSnake(item));
  }

  logout() {
    return this.http.delete(`${this.url}/logout`)
  }
}

export interface LoginViewModel {
  login: string;
  password: string;
}