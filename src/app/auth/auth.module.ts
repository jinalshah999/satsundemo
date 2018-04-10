import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SigupComponent } from './sigup/sigup.component';
import { authRouting } from './auth.routing';

@NgModule({

  declarations:[
    SigupComponent
  ],
  imports:[
   CommonModule,
   ReactiveFormsModule,
   authRouting
  ]
})

export class AuthModule{}
