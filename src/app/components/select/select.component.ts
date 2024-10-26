import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent implements OnInit {
@Input() title:string="" // p t c
@Input() data:any=[] 
@Output() selectedData= new EventEmitter(); // c to p
constructor()
{
}
ngOnInit(): void {
  
}
detectChanges(event:any)
  {
this.selectedData.emit(event);
  }
}
