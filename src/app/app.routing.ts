import { Routes,RouterModule } from '@angular/router';
import { SigupComponent } from './auth/sigup/sigup.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';

const arr:Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'signup',component:SigupComponent},
  {path:'home',component:HomeComponent},
  {path:'product',component:ProductComponent},
  {path:'addproduct',component:AddproductComponent},
  // {path:'productdetails/:id',component:ProductdetailsComponent},
  {path:'productdetails',component:ProductdetailsComponent},
  {path:'not-found',component:PageNotFoundComponent},
  {path:'**',redirectTo:'/not-found',pathMatch:'full'}
];

export const routing=RouterModule.forRoot(arr);
