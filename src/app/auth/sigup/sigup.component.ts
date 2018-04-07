import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styles: []
})
export class SigupComponent implements OnInit {

  signupForm:FormGroup;
  invalidUsername:string[]=[
    'xyz',
    'mno',
    'abc'
  ];
  constructor() { }

  ngOnInit() {

    this.signupForm=new FormGroup({
      'username':new FormControl(null,[Validators.required,Validators.minLength(2),this.myValidation.bind(this)]),
      'email':new FormControl(null,Validators.email)
    });
  }
  onSubmit(){
    console.log(this.signupForm);
  }
  myValidation(control:AbstractControl):{[s:string]:boolean}{
    if(this.invalidUsername.indexOf(control.value)!==-1){
      return {'usernameIsInvalid':true};
    }
   return null;
  }

}
