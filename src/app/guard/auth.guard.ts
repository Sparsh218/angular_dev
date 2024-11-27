import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then((loggedIn: boolean) => {
      if (loggedIn) {
        return true;
      } else {
        return this.router.navigate(['/']);
      }
    });
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then((loggedIn: boolean) => {
      if (loggedIn) {
        return true;
      } else {
        return this.router.navigate(['/']);
      }
    });
  }

  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextstate?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return component.canDectivate();
  }
}

export interface CanComponentDeactivate {
  canDectivate(): Observable<boolean> | Promise<boolean> | boolean ;
}