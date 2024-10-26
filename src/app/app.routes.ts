import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = 
[
 {path: '',redirectTo:'Home',pathMatch:'full'},
 {path: 'Home', component:HomeComponent},
{path: 'Products', component:ProductsComponent},
{path: 'About', component:AboutUsComponent},
{path: 'Orders', component:OrdersComponent},
{path:"details/:id", component:ProductDetailsComponent},
{path: 'Categories', component:CategoriesComponent},
{path: 'contact', component: ContactComponent},
{path: '**', redirectTo: 'Home',pathMatch:'full'},

];
