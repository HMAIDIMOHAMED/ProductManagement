import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { AdminloginComponent } from './components/admin/adminlogin/adminlogin.component';
import { ProductListUserComponent } from './components/product/product-list-user/product-list-user.component';
import { HomeComponent } from './components/FirstPage/home/home.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccueilComponent,
    ProductListComponent,
    CreateProductComponent,
    UpdateProductComponent,
    AdminloginComponent,
    ProductListUserComponent,
    HomeComponent,
    AdminDashboardComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
