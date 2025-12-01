import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { Home } from './home/home';
import { About } from './about/about';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavBar,
    Home,
    About,
    Projects,
    Skills,
    Background,
    Contact
  ],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
