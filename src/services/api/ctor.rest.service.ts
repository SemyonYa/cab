import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Ctor } from '../../models/Ctor'
import { HttpClient } from '@angular/common/http';
import { UiService } from '../ui.service';

@Injectable({
  providedIn: 'root'
})
export class CtorRestService extends RestService<Ctor> {
  route = '/ctor';

  constructor(http: HttpClient, ui: UiService) {
    super(http, ui);
  }
}
