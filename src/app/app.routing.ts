import { Routes,RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';


const arr:Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'auth',canActivate:[AuthGuardService] ,loadChildren:'./auth/auth.module#AuthModule'},
  {path:'home',component:HomeComponent},
  {path:'product',loadChildren:'./product/product.module#ProductModule'},
  // {path:'productdetails/:id',component:ProductdetailsComponent},
  {path:'not-found',component:PageNotFoundComponent},
  {path:'**',redirectTo:'/not-found',pathMatch:'full'}
];

// {preloadingStrategy:PreloadAllModules}
export const routing=RouterModule.forRoot(arr);
