import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
=======
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
>>>>>>> d96d3b4b83d87938f45edfb6b9556347744fa2fa

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SideNavbarComponent
=======
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent
>>>>>>> d96d3b4b83d87938f45edfb6b9556347744fa2fa
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
