import { Routes,RouterModule } from '@angular/router';
import { SigupComponent } from './sigup/sigup.component';

const arr:Routes=[

  {path:'',redirectTo:'/signup',pathMatch:'full'},
  {path:'signup',component:SigupComponent}
];

export const authRouting=RouterModule.forChild(arr);
