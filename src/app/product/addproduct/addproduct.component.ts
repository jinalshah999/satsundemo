import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../../entity/product';
import { ProductdataService } from '../../services/productdata.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  defaultValue:number=1;
  @ViewChild('f') productform:NgForm;
  constructor(private _data:ProductdataService) { }
  ngOnInit() {
  }
  onSubmit(f){
    // let obj=new Product(this.productform.value.p_id,
    //   this.productform.value.pname,
    //   this.productform.value.pprice,
    //   this.productform.value.pimg,
    //   this.productform.value.soh);
      this._data.addProduct(<Product>this.productform.value).subscribe(
        (x:any)=>{
          console.log('added');
        },
        function(error){
          console.log(error);
        },
        function(){
          console.log('complete');
        }
      );

  }
}
