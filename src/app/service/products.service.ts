import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InjectionToken } from '@angular/core';
import { Iproduct } from '../models/iProduct';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService  
  {
 
 
    
  
  constructor(private http:HttpClient) 
  { 
      }

  getAllProducts(){
   return  this.http.get(environment.baseApi+'products')
        
  }
  getAllCategories()
  {
    return this.http.get(environment.baseApi+'products/categories')
  }

  getByCategory(key: string)
  {
    return this.http.get(environment.baseApi+'products/category/'+key)
  }
  getProductDetails(key:any)
  {
    return this.http.get(environment.baseApi+'products/'+key)
  }

  
}


