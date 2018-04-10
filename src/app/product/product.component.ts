import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../entity/product';
import { ProductdataService } from '../services/productdata.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  arr:Product[]=[];
  id:number=10;
  constructor(private _router:Router,private _data:ProductdataService) { }

  ngOnInit() {
  this._data.getAllProduct().subscribe(
    (x:Product[])=>{
      this.arr = x;
      console.log(this.arr);
    },
    function(error){
      console.log(error);
    },
    function(){
      console.log('patyu');
    }
  );
  }
  onClick(){
    // this._router.navigate(['productdetails',this.id],{queryParams:{'pid':this.id}});
     this._router.navigate(['productdetails'],{queryParams:{'pid':this.id},fragment:'Loading'});
  }
  onAddProduct(){
    this._router.navigate(['product/addproduct']);
  }
  onDelete(item:Product){
    this._data.deleteProduct(item.p_id).subscribe(
      (x:any)=>{
        this.arr.splice(this.arr.indexOf(item),1);
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log('patyu');
      }
    );
  }
}
