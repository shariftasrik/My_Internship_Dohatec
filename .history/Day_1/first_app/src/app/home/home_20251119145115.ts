import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [Nav],
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

