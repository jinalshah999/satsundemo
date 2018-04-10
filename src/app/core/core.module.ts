import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home/home.component';
import { ProductdataService } from './../services/productdata.service';
import { AuthService } from '../services/auth.service';
import { AuthGuardService } from '../services/auth-guard.service';
@NgModule({

  declarations:[
    HomeComponent

  ],
  imports:[
    CommonModule
  ],
  providers:[
    ProductdataService,
    AuthService,
    AuthGuardService
  ],
  exports:[
    HomeComponent
  ]

})

export class CoreModule{}
