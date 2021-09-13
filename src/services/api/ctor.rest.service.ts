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

  tConstructor(item: any): Ctor {
    let ctor = super.responseToCamelCase(item) as Ctor;
    ctor.items = (item['ctorItems'] as any[]).map(i => super.responseToCamelCase(i) as CtorItem);
    return ctor;
  }

  getByTag(tag: string): Observable<Ctor[]> {
    return this.http.get<Ctor[]>(`${this.url}/tag/${tag}`)
      .pipe(
        map(
          (items: any[]) => items.map(this.tConstructor)
        )
      );
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
