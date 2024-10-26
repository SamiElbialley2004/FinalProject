import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from '../categories/categories.component';
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../../service/products.service';
import { CartIconComponent } from '../cart-icon/cart-icon.component';
import { FormsModule } from '@angular/forms';
import { Dropdown } from 'bootstrap';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    FormsModule,
    RouterLinkActive,
    ProductsComponent,
    CategoriesComponent,
    CartIconComponent
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  products: any[] = [];
  searchTerm: string = '';
  filteredProducts: any[] = []; // Initialize as an empty array

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
      const dropdownElement = document.getElementById('dropdownMenuButton');
      if (dropdownElement) {
        new Dropdown(dropdownElement);  // Initializes Bootstrap dropdown
      }
      
  }
  
  isDropdownOpen = false;

  toggleDropdown(event: Event) {
    event.stopPropagation(); // Prevents the event from propagating to document click listener
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Close dropdown if clicked outside
  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    this.isDropdownOpen = false;
  }


  getProducts() {
    this.service.getAllProducts().subscribe(
      (res: any) => {
        if (Array.isArray(res)) {  // Check if response is an array
          this.products = res;
          this.filteredProducts = res; // Initialize filteredProducts after data is loaded
        } else {
          console.error("Unexpected response format:", res);
          alert("Error: Unexpected response format.");
        }
      },
      error => {
        console.error("Error fetching products:", error);
        alert("Error fetching products.");
      }
    );
  }

  onSearch() {
    const term = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      product.name?.toLowerCase().includes(term) // Optional chaining for safety
    );
  }
}
