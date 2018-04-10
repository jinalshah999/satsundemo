import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { prodRouting } from './product.routing';

@NgModule({
declarations:[
  ProductComponent,
  AddproductComponent,
  ProductdetailsComponent
],
imports:[
  CommonModule,
  FormsModule,
  prodRouting
]

})

export class ProductModule{}
