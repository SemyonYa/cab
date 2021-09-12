import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Ctor, CtorItem } from '../../models/Ctor'
import { HttpClient } from '@angular/common/http';
import { UiService } from '../ui.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CtorRestService extends RestService<Ctor> {
  route = '/ctors';

  constructor(http: HttpClient, ui: UiService) {
    super(http, ui);
  }

  postChildren(items: CtorItem[], ctorId: number): Observable<CtorItem[]> {
    return this.http.post<CtorItem[]>(`${this.url}/${ctorId}/children`, { items: items.map(item => this.formValueToSnake(item)) })
      .pipe(
        map(
          (items: any[]) => items.map(item => this.responseToCamelCase(item) as CtorItem)
        )
      );
  }
}
