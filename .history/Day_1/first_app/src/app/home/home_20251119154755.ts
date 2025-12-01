import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';

@Component({
  selector: 'app-home',
  imports: [NavBar],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
  title: string = "This is an Angular application";
  subtitle: string = "Build awesome apps with Angular easily!";
  
  changeTitle(){
  this.title = "You have changed the title!";
}
}

