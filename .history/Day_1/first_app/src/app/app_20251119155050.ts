import { Component } from '@angular/core';
import { NavBar } from './nav-bar/nav-bar';
import { Home } from './home/home';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';
import { Background } from './background/background';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavBar,
    Home,
    About,
    Projects,
    Skills,
    Background,
    Contact
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
