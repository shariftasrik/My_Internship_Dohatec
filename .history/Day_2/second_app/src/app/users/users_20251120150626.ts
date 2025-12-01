import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  name : null | string="";
  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe((params)=>{
      console.log(params);
      this.name =  params
    })
  }
}
