import { HttpClient, HttpErrorResponse } from '@angular/common/http/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { UiService } from '../ui.service';


export abstract class RestService<T extends { id: string }> {
  private errorTimeout: any;
  protected route: string;

  list$ = new BehaviorSubject<T[]>(null);

  private get url(): string {
    return `${environment.baseUrl}${this.route}`;
  }

  private handleError = (err: HttpErrorResponse) => {
    if (this.errorTimeout) clearTimeout(this.errorTimeout);

    let errorText: string;
    if (err.status < 500 && err.status >= 400) {
      errorText = err.message;
    } else {
      errorText = 'It\'s a SAD  :-(';
    }

    this.ui.showError(`${new Date()} --- ${errorText}`);
    this.errorTimeout = setTimeout(() => {
      this.ui.hideError();
    }, 5000);
  }

  constructor(private http: HttpClient, private ui: UiService) { }

  getAll(): void {
    this.http.get<T[]>(this.url)
      .subscribe(
        items => {
          this.list$.next(items);
        },
        this.handleError,
        () => {
          console.log('COMPLETE');
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
