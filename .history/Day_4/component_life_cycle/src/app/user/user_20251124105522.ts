import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  name = "tasrik"
  constructor(){
    console.log("constructor");
    
  }
  ngOnInit(){
    console.log("ngOnInit");
    
  }
}
