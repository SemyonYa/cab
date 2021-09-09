import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { UiService } from '../ui.service';
import { Filial } from '../../models/Filial';

@Injectable({
  providedIn: 'root'
})
export class FilialRestService extends RestService<Filial> {
  route = '/filials';

  constructor(http: HttpClient, ui: UiService) {
    super(http, ui);
  }
}
