import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { InrUsdPipe } from './inr-usd.pipe';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { CartComponent } from './component/cart/cart.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductsComponent } from './component/products/products.component';
import { FilterPipe } from './shared/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    InrUsdPipe,
    CartComponent,
    HeaderComponent,
    ProductsComponent,
    FilterPipe
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
