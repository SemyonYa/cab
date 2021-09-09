import { HttpClient, HttpErrorResponse } from '@angular/common/http/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { UiService } from '../ui.service';


export abstract class RestService<T extends { id: number }> {
  list$ = new BehaviorSubject<T[]>(null);

  private errorTimeout: any;
  protected route: string;

  protected get url(): string { return `${environment.baseUrl}${this.route}`; }

  handleError = (err: HttpErrorResponse) => {
    if (this.errorTimeout) clearTimeout(this.errorTimeout);

    let errorText: string;

    if (err.status === 422) {
      errorText = (err.error as any[]).map(e => e.message).join('\n');
    }
    else if (err.status < 500 && err.status >= 400) {
      errorText = err.message;
    } else {
      errorText = 'It\'s a SAD  :-(';
    }

    this.list$.next([]);

    this.ui.showError(`${errorText}`);
    this.errorTimeout = setTimeout(() => {
      this.ui.hideError();
    }, 5000);
  }

  constructor(protected http: HttpClient, protected ui: UiService) { }

  getAll(): void {
    this.list$.next(null);
    this.http.get<T[]>(this.url)
      .pipe(
        map(
          (items: any[]) => {
            return items.map(item => this.responseToCamelCase(item) as T)
          }
        )
      )
      .subscribe(
        items => {
          this.list$.next(items);
        },
        this.handleError,
      )
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`)
      .pipe(
        map(
          (item: any) => {
            return this.responseToCamelCase(item) as T;
          }
        )
      );
  }

  post(item: T): Observable<T> {
    return this.http.post<T>(this.url, this.formValueToSnake(item))
      .pipe(
        map(
          item => {
            return this.responseToCamelCase(item) as T;
          }
        )
      );
  }

  put(item: T, id: number): Observable<T> {
    return this.http.put<T>(`${this.url}/${id}`, this.formValueToSnake(item))
      .pipe(
        map(
          item => {
            return this.responseToCamelCase(item) as T;
          }
        )
      );
  }

  patch(partialItem: Partial<T>, id: string): Observable<T> {
    return this.http.patch<T>(`${this.url}/${id}`, this.formValueToSnake(partialItem))
      .pipe(
        map(
          item => {
            return this.responseToCamelCase(item) as T;
          }
        )
      );
  }

  delete(id: number): Observable<T> {
    return this.http.delete<T>(`${this.url}/${id}`)
      .pipe(
        map(
          item => {
            return this.responseToCamelCase(item) as T;
          }
        )
      );
  }

  protected formValueToSnake(formValue: any) {
    let newValue = {};
    for (let key in formValue) {
      newValue[key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)] = (typeof formValue[key] === 'boolean')
        ? 1
        : formValue[key]
    }
    return newValue;
  }

  // private toSnake(s: string): string {
  //   return s.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  // }

  protected responseToCamelCase(response: any) {
    var newObj = {};
    for (let d in response) {
      if (response.hasOwnProperty(d)) {
        newObj[d.replace(/(\_\w)/g, function (k) {
          return k[1].toUpperCase();
        })] = response[d];
      }
    }
    return newObj;
  }
}
