import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  qpara:number;
  num:number;
  frag:string;
  constructor(private _route:ActivatedRoute,private _router:Router) { }

  ngOnInit() {
    // this.num=this._route.snapshot.params['id'];

    this.qpara=this._route.snapshot.queryParams['pid'];
this.frag=this._route.snapshot.fragment;
console.log(this.frag);
    console.log("query param"+this.qpara );
    // this._route.params.subscribe(
    //   (x:Params)=>{
    //     this.num=x['id'];
    //     console.log(this.num);
    //   }
    // );
    // console.log(this.num);
  }
  onClick(){
    this._router.navigate(['productdetails',20]);
  }

}
