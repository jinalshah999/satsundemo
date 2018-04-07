import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  defaultValue:number=1;
  @ViewChild('f') productform:NgForm;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(f){
  console.log(this.productform);
  console.log(f);
  }
}
