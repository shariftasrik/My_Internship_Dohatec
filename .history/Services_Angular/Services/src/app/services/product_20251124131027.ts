import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor(){
    console.log("product - service called");
  }

  getProductData(){
    return [
      { name: 'Samsung', category: 'mobile', price:40000 },
      { name: 'Xiomi', category: 'mobile', price:25000 },
      { name: 'Oppo', category: 'mobile', price:24000 },
    ]
  }  
}
