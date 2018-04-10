import { ComponentFixture } from '@angular/core/testing';
import { Routes,RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const arr :Routes=[
  {path:'',component:ProductComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'productdetails',component:ProductdetailsComponent}

];

export const prodRouting=RouterModule.forChild(arr);
