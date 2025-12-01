import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

changeTitle(){
  this.title = "You "
}

export class Home {
  title: string = "Welcome to Angular!";
}
