import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from "../spinner/spinner.component";
import { SelectComponent } from '../select/select.component';
import { ProductComponent } from "../product/product.component";
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink, ProductsComponent, SpinnerComponent, SelectComponent, ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit 
{
  products:any[]=[];
  categories: any[] = [];
  loading:boolean = false;
  cartProduct:any=[]
  constructor(private service:  ProductsService
  )
  {

  }
  ngOnInit():void
   {
this.getProducts();
this.getCategories();
   }
  
getProducts(){
  this.loading=true;
  this.service.getAllProducts().subscribe((res:any)=>{
    
   this.products= res
   this.loading=false;
    

  },error=>{
    this.loading=true;
    alert("error"),this.loading=true;}

  )
}

getCategories()
{ 
this.service.getAllCategories().subscribe((res:any)=>{
  console.log(res);
this.categories= res

},error=>{
  
  alert("error")})
}
filterCategory=(event:any)=>{
let value = event.target.value;
console.log(value);
this.getProductsOfCategory(value);
}
getProductsOfCategory(key:string)
{
  this.service.getByCategory(key).subscribe((res:any)=>{this.products=res
    this.loading=false;
  },error=>{
    this.loading=true;
    alert("error")})

  
}
addToCart(event:any)
{
  if("cart" in localStorage) 
  {
    this.cartProduct= JSON.parse(localStorage.getItem("cart")!)
    let itemExists = this.cartProduct.find( function (item:any){ item.item.id == event.item.id} );
  if (!itemExists) {
    this.cartProduct.push(event);
    localStorage.setItem("cart", JSON.stringify(this.cartProduct));
  } else {
    alert("Item is already in the cart!");
  }
  }
  else{
    this.cartProduct.push(event);
    localStorage.setItem("cart", JSON.stringify(this.cartProduct));
   }
  }

}
