import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = '1234567890';

    if (this.authService.isAuthenticated) {
      // Token in Header einfügen
      const reqWithToken = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      return next.handle(reqWithToken);
    } else {
      // Request unverändert weitergeben
      return next.handle(request);
    }
  }
}
