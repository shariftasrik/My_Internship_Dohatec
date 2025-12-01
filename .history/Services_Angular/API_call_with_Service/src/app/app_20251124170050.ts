import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Products } from './services/products';
import { Users } from './services/users';
import { User } from './interfaces/User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // productData:any
  userList:User[]=[]

  constructor(
    // private product:Products,
    private users:Users
  ){}
  
  // ngOnInit(){
  //   this.product.productList().subscribe((data:any)=>{
  //     console.log(data);
  //     this.productData = data.products;
  //   });
  // }

  ngOnInit(){
    this.users.getUser().subscribe((data:User[])=>{
      console.log(data);
      
      this.userList = data;
    })
  }

  addUser(user:User){
    console.log(user);
    this.User
  }
}
