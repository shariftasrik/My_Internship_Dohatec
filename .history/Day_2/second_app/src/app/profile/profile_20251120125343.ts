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
  // inherited class nai tai private use kora hoise
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    let name =  this.route.snapshot.paramMap.get
  }
}
