import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})



export class Home {
  title: string = "Welcome to Angular!";changeTitle(){
  this.title = "You clicked the button!";
}
}

