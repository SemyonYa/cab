import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

// @Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }

  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   // return next.handle(request);
  //   return next.handle(request)
  //     .pipe(
  //       catchError(
  //         (error: any) => {
  //           if (error instanceof HttpErrorResponse) {
  //             if (error.status === 401) {
  //               console.log('first 401');
  //               this.authService.logout();
  //             }
  //             if (error.status === 403) {
  //               this.authService.logout();
  //             }
  //           } else {
  //             console.log('error X');
  //             // return throwError(error);
  //           }
  //           return new Observable<HttpEvent<any>>();
  //         }
  //       )
  //     );
  // }
}
