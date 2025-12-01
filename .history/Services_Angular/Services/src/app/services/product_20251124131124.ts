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
      { name: 'Samsung', category: 'mobile', price:140000 },
      { name: 'Asus', category: 'laptop', price:125000 },
      { name: 'Suzuki', category: 'bike', price:240000 },
    ]
  }  
}
