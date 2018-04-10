import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  isLoggedIn:boolean=false;
  constructor() { }
  logIn()
  {
    this.isLoggedIn=true;
  }
  logOut()
  {
    this.isLoggedIn=false;
  }

}
