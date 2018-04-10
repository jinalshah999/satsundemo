import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styles: []
})
export class SigupComponent implements OnInit {
  loginForm:FormGroup;
  selectedFile:File=null;
  prg=0;
  debouncer: any;
  invalidUsername=[
    'xyz',
    'mno',
    'abc'
  ];
  genders:string[]=[
    'male',
    'female'
  ];
  constructor() { }

  ngOnInit() {

    this.loginForm=new FormGroup({
      'username':new FormControl(null,[Validators.required,this.myValidation.bind(this)]),
      'email':new FormControl(null,[Validators.required,Validators.email]),//,this.validateEmail.bind(this)
      'gender':new FormControl('male'),
      'hobby':new FormArray([]),
      'mobile_no':new FormControl(null),
      'user_img':new FormControl(null),
      'notification':new FormControl('email')
    });
    this.formControlValueChanged();
  }
  onSubmit(){
    console.log(this.loginForm);
  }
  get formData1() { return <FormArray>this.loginForm.get('hobby'); }
  myValidation(control:AbstractControl):{[s:string]:boolean}{
    if(this.invalidUsername.indexOf(control.value)!==-1){
      return {'usernameIsInvalid':true};
    }
   return null;
  }
  onAddHobby(){

    const control=new FormControl(null,[Validators.required]);
   (<FormArray> this.loginForm.get('hobby')).push(control);
}
onFileSelected(value){
  this.selectedFile=<File>value.target.files[0];
  console.log(value);
}
formControlValueChanged(){
  const phoneControl=this.loginForm.get('mobile_no');
  this.loginForm.get('notification').valueChanges.subscribe(
    (x:string)=>{

        if(x==='phone'){
          phoneControl.setValidators([Validators.required,Validators.maxLength(8)]);
        }
        else if(x==='email') {
          phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    }
  );
}

}
