import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


@Injectable()
export class HttpTimeInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Before send request
    const start = Date.now();
    return next.handle(request).pipe(
      finalize(() => {
        // After receive request
        const end = Date.now();
        const time = end - start;
        console.log(`${request.method} ${request.url} : ${time}ms`);
      })
    );
  }
}
