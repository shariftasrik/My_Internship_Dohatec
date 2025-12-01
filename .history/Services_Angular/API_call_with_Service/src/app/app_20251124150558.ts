import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './services/products';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private product:Products){}
  
  ngOnInit(){
    this.product.productList().subscribe((data)=>{
      
    });
  }
}
