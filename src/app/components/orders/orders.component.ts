import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { ProductComponent } from '../product/product.component';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductsComponent, ProductComponent,FormsModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  cartProduct: any[] = [];  
totalPrice:any = 0; 
totalAmount:any = 0;
success: boolean = false;
constructor(private service: CartService)
{

}
  ngOnInit(): void {
    this.getCardProduct();
    
  }

  getCardProduct() {
    if ("cart" in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!);
      
    }
    this.getTotalOfCart()
    this.getTotalPrice();
    
   
  }
  getTotalPrice() {
    this.totalPrice =0;
    for(let x in this.cartProduct)
   
   {
this.totalPrice += this.cartProduct[x].item.price * this.cartProduct[x].quantity 


    }
  }
  minsAmount(index:number)
  {
    this.cartProduct[index].quantity--;
    this.detectChange()
    
  }
  addAmount(index:number)
  {
    this.cartProduct[index].quantity++ ;
    this.detectChange()
  }
  detectChange()
  {
    this.getTotalOfCart()
    this.getTotalPrice()
    localStorage.setItem("cart", JSON.stringify(this.cartProduct)); //updated
    
  }
  getTotalOfCart()
  {
this.totalAmount=0;
for(let x in this.cartProduct) 
  {
    this.totalAmount+=this.cartProduct[x].quantity
  }
  }
  deleteProduct(index:number)
  {
    this.cartProduct.splice(index,1);
    this.detectChange();
    
   
  }
  getClearCart()
  {
    this.cartProduct=[];
    this.detectChange();
    
  }
  addCart()
  {
    let products=this.cartProduct.map(item=>
    {
     return{ productId:item.item.id , quantity:item.quantity}
    }
    )
    let Model={
      userId:5,
      date:new Date(),
      products:products
       }
       this.service.createNewCar(Model).subscribe(res=>
       {
this.success = true;
       }
       )
    console.log(Model)
  }
}
