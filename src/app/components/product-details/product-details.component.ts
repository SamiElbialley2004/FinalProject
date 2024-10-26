import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SpinnerComponent } from "../spinner/spinner.component";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, ProductDetailsComponent, RouterLink, SpinnerComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  item:any = {};
  id!:any
  loading:boolean = false;
  constructor(private service:  ProductsService,private router:ActivatedRoute)
  {
this.id=this.router.snapshot.paramMap.get("id")
  }
  ngOnInit():void
   {
this.getDetails(event)
   }
   getDetails(event:any){

    this.loading = true;
    this.service.getProductDetails(this.id).subscribe((res:any)=>{
      this.loading = false;
     this.item= res
     
    },error=>{
      
      alert("error"),this.loading = false}
  
    )
  }
  
}
