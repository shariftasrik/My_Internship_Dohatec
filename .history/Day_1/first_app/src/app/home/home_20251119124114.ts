import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})



export class Home {
  title: string = "This is an Angular application";
  sub
  
  changeTitle(){
  this.title = "You have changed the title!";
}
}

