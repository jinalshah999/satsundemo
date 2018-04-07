import { Component, OnInit } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

  status1:string[]=[
    'done',
    'pending'
  ];
  Id:string='';
  Title:string='';
  Status:string='';
  arr:Task[]=[
    new Task('1','get jio sim card','done'),
    new Task('2','push code to git hub','pending'),
    new Task('3','email to your manager','pending'),
    new Task('4','go for running','done')
  ];
  constructor() { }

  ngOnInit() {
  }
  onDeleteTask(item:Task){
this.arr.splice(this.arr.indexOf(item),1);
  }
  onTaskAdd()
  {
    this.arr.push(new Task(this.Id,this.Title,this.Status));
  }
}
