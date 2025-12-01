import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './services/products';
import { Users } from './services/users';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  productData:any

  constructor(
    private product:Products,
    private users:Users
  ){}
  
  // ngOnInit(){
  //   this.product.productList().subscribe((data:any)=>{
  //     console.log(data);
  //     this.productData = data.products;
  //   });
  // }

  ngOnInit(){
    this.
  }
}
