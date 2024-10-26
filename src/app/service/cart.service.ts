import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) 
  {}
createNewCar(model:any)
{
  return this.http.post(environment.baseApi +'carts',model)
}
private items: any[] = [];

  addToCart(product: any) {
    this.items.push(product);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  getCartItems() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  getCartCount(): number {
    return this.getCartItems().length;
  }
   
}
