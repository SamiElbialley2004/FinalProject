import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  latestProducts: any[] = [];
  productGroups: any[][] = [];
  latestProductGroups: any[][] = []; // To hold latest products in groups

  constructor(private http: HttpClient, private service: ProductsService) {}

  ngOnInit(): void {
    this.fetchFeaturedProducts();
    this.fetchLatestProducts(); // Call this method correctly
  }

  fetchFeaturedProducts() {
    this.http.get<any[]>('https://fakestoreapi.com/products?limit=4')
      .subscribe(data => {
        this.products = data;
        this.groupProducts(); // Group featured products after fetching
      }, error => {
        console.error('Error fetching featured products:', error);
      });
  }

  fetchLatestProducts() {
    // Fetch more products as "latest" products
    this.http.get<any[]>('https://fakestoreapi.com/products?sort=desc&limit=4')
      .subscribe(data => {
        this.latestProducts = data;
        this.groupLatestProducts(); // Group latest products after fetching
      }, error => {
        console.error('Error fetching latest products:', error);
      });
  }

  groupProducts() {
    const chunkSize = 4; // Number of products per slide
    this.productGroups = []; // Resetting previous groups
    for (let i = 0; i < this.products.length; i += chunkSize) {
      this.productGroups.push(this.products.slice(i, i + chunkSize));
    }
  }

  groupLatestProducts() {
    const chunkSize = 4; // Number of products per slide
    this.latestProductGroups = []; // Resetting previous groups
    for (let i = 0; i < this.latestProducts.length; i += chunkSize) {
      this.latestProductGroups.push(this.latestProducts.slice(i, i + chunkSize));
    }
  }
}
