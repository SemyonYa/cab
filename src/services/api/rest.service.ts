import { HttpClient } from '@angular/common/http/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { environment } from '../../environments/environment'

export abstract class RestService<T extends { id: string }> {
  route: string;
  list$ = new BehaviorSubject<T[]>(null);
  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.baseUrl}/${this.route}`
  }

  getAll(): void {
    console.log(this.http);

    this.http.get<T[]>(this.url)
      .subscribe(
        items => {
          this.list$.next(items);
        }
      )
  }

  get(id: string): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`);
  }

  post(item: T): Observable<T> {
    return this.http.post<T>(this.url, item);
  }

  put(item: T): Observable<T> {
    return this.http.put<T>(`${this.url}/${item.id}`, item);
  }

  patch(partialItem: Partial<T>, id: string): Observable<T> {
    return this.http.patch<T>(`${this.url}/${id}`, partialItem);
  }

  delete(id: string): Observable<T> {
    return this.http.delete<T>(`${this.url}/${id}`);
  }
}
