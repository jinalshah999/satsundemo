import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  num1:number=0;
  num2:number=0;
  ans:number=0;
  ans1:number=0;
  flag:boolean=false;
  str:string='jinal shah';
  str1:string="";

  @ViewChild('input2') inp2;
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    console.log("hello");
  }
  onAdd(){
    this.ans=this.num1+this.num2;
  }
  onAdd1(a:any,b:any)
  {
    this.ans1= parseInt(a)+ parseInt(b);
  }
  onInput2(){
    console.log(this.inp2.value);
  }
}
