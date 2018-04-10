import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 @Input() result:string="";
 @Output() jinal=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onClick(searchTerm:string)
  {
    this.jinal.emit(searchTerm);
  }

}
