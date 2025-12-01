import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './services/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  productData:{
    name: string;
    category: string;
    price: number;
  }[] | undefined


  constructor(private product:Product){}

  ngOnInit(){
    this. this.product.getProductData();
    
    //this.product.getProductData();
  }
}
