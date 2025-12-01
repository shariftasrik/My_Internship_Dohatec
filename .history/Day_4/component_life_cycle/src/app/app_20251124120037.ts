import { Component, signal, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [User,NgIf],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  @viewChild('user') User:;
  counter=0;

  constructor(){
    afterRender(
      ()=>{
        console.log("afterRender", this.User.counter);
        
      }
    )
  }


  updateCounter(){
    this.counter++;
  }
}
