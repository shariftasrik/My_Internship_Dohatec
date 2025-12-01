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
      name: 'A',
      age: 20,
      email: 'a@gmail.com'
    },
    {
      id: '2',
      name: 'B',
      age: 21,
      email: 'b@gmail.com'
    },
    {
      id: '3',
      name: 'C',
      age: 22,
      email: 'c@gmail.com'
    },
    {
      id: '4',
      name: 'D',
      age: 23,
      email: 'd@gmail.com'
    },
    {
      id: '',
      name: 'A',
      age: 20,
      email: 'a@gmail.com'
    },
  ]
  constructor(private router:Router){}

  goToProfile(name:string){
    this.router.navigate(['profile'], {queryParams:{name}})
  }
}
