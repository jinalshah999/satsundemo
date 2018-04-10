import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuardService {

  constructor(private _auth:AuthService,private _route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    //return this._auth.isLoggedIn;
    if(this._auth.isLoggedIn){
      return true;
    }
    else
    {
      this._route.navigate(['/home']);
      return false;
    }
  }

}
