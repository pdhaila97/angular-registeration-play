import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService){}

  canActivate(): boolean {
    return this.authService.isLoggedIn;
      // return true;
  }
  canActivateChild(): boolean {
    return this.canActivate();
  }

}
