import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  users=[
    {
      id: '1',
      name: 
    }
  ]
  constructor(private router:Router){}

  goToProfile(name:string){
    this.router.navigate(['profile'], {queryParams:{name}})
  }
}
