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

  productData=

  constructor(private product:Product){}

  ngOnInit(){
    console.log(this.product.getProductData());
    
    //this.product.getProductData();
  }
}
