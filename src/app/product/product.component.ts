import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id:number=10;
  constructor(private _router:Router) { }

  ngOnInit() {
  }
  onClick(){
    // this._router.navigate(['productdetails',this.id],{queryParams:{'pid':this.id}});
     this._router.navigate(['productdetails'],{queryParams:{'pid':this.id},fragment:'Loading'});
  }
  onAddProduct(){
    this._router.navigate(['addproduct']);
  }
}
