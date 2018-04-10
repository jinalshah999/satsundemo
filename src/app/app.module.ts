import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
// import { DemoComponent } from './demo/demo.component';
// import { Demo2Component } from './demo2/demo2.component';
// import { FilterPipe } from './filter.pipe';
// import { CreditcardDirective } from './creditcard.directive';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './header.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // DemoComponent,
    // Demo2Component,
    // FilterPipe,
    // CreditcardDirective,
    PageNotFoundComponent,
    TestComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
