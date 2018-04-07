import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';
import { FilterPipe } from './filter.pipe';
import { CreditcardDirective } from './creditcard.directive';
import { SigupComponent } from './auth/sigup/sigup.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo2Component,
    FilterPipe,
    CreditcardDirective,
    SigupComponent,
    ProductComponent,
    AddproductComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
