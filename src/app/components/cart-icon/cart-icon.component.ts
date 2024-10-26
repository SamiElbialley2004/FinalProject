import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
  ,standalone: true
})
export class CartIconComponent implements OnInit {
  cartCount: number = 0;

  constructor(private service:CartService,private router: Router) {}

  ngOnInit(): void {
    this.cartCount = this.service.getCartCount();
    
  }

  navigateToCart() {
    
    {
    this.router.navigate(['/Orders']);
  }
}
}
