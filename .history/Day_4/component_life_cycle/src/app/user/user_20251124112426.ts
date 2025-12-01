import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  constructor(){
    console.log("constructor");
  }
  ngOnInit(){
    console.log("ngOnInit");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
    alert("")
  }
}
