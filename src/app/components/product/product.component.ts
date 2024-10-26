import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
 @Input() item:any={}
 @Output() data = new EventEmitter();
 amount:number=0
 addButton:boolean=false;
 showFullDescription: boolean = false;
 showAddedNotification: boolean = false;
add()
{
  this.data.emit({item:this.item,quantity:this.amount})
  this.showAddedNotification = true;

    // Hide the message after 2 seconds
    setTimeout(() => {
      this.showAddedNotification = false;
    }, 2000);
}
}
