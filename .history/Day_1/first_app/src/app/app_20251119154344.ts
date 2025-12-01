import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { Home } from './home/home';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';
import { Background } from './background/background';
import { Contact } from './contact/contact';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavBar,
  ],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
