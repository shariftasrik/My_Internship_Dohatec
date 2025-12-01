import { Component, signal } from '@angular/core';
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

  counter=0;

  updateCounter(){
    this.counter++;
  }
}
