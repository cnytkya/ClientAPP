import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ClientApp';
  categoryName="Telefon Kategorisi"

  products =[
   { id:1,name:"Iphone s18", price:104213,isActive:true},
   { id:2,name:"Iphone s18", price:104213,isActive:false},
   { id:3,name:"Iphone s18", price:104213,isActive:true},
   { id:4,name:"Iphone s18", price:104213,isActive:false},
   { id:5,name:"Iphone s18", price:104213,isActive:true},
   { id:6,name:"Iphone s18", price:104213,isActive:true},
   { id:6,name:"Iphone s19", price:104213,isActive:true}
  ]
}
