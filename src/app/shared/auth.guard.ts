import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    if (this.authService.isAuthenticated) {
      return true;
    } else {
      window.alert('Not logged in!');
      return this.router.parseUrl('/home');
    }
  }

  /*
  // Alternative Lösung mit Observable:
  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.isAuthenticated$.pipe(
      take(1),
      map(isAuthenticated => {
        if (isAuthenticated) {
          return true;
        } else {
          window.alert('Not logged in!');
          return this.router.parseUrl('/home');
        }
      })
    );
  }
  */

}
