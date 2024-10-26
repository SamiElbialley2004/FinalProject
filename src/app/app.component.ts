import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { platformBrowser } from '@angular/platform-browser';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { SignPageComponent } from './components/sign-page/sign-page.component';
import { HttpClient } from '@angular/common/http';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,HomeComponent,FooterComponent,OrdersComponent,ProductsComponent,SignPageComponent,CartIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FinalProject';
}
