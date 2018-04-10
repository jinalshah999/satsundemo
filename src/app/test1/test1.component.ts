import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  cat_name:string="watch";
  arr:string[]=[
  'jinal','nirmit','shreenil','tejas'
];
  constructor() { }

  ngOnInit() {
  }
  onJinal(searchTerm:string){
   this.arr=this.arr.filter((x)=>x.indexOf(searchTerm)!==-1);
  }

}
