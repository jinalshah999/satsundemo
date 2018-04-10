import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _authdata:AuthService) { }

  ngOnInit() {
  }
  onLogIn(){
    this._authdata.logIn();
  }
  onLogOut(){
    this._authdata.logOut();
  }
}
