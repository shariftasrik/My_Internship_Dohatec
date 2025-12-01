import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  standalone: true,
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  userName:string|null="";

  // inherited class nai tai private use kora hoise
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    this.userName =  this.route.snapshot.paramMap.get('name');
    // console.log(this.userName);

    this.route.queryParams.subscribe(params=>{
      this.userName=params[name];
    })

  }
}
