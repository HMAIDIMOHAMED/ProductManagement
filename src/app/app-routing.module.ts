import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AccountComponent } from './components/account/account.component';
import { AdminloginComponent } from './components/admin/adminlogin/adminlogin.component';
import { ProductListUserComponent } from './components/product/product-list-user/product-list-user.component';
import { HomeComponent } from './components/FirstPage/home/home.component';
const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'addproduct', component: CreateProductComponent },
  { path: 'updateproduct/:name', component: UpdateProductComponent },
  {path: 'accueil', component:AccueilComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'account',component:AccountComponent},
  {path:'adminlogin', component:AdminloginComponent},
  {path:'userproducts', component:ProductListUserComponent},
  {path:'home', component:HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
