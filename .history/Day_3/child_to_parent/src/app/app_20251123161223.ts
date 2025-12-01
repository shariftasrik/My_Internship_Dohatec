import { Component, signal } from '@angular/core';

import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  users:undefined|string[];
  handleUsers(users:string[]){
    console.log(users);
    this.users = users;
  }
}
