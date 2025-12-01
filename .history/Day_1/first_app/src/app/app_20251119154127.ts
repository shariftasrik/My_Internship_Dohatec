import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    NavBar,
    Home,
    About,
    Projects,
    Skills,
    Background,
    Contact],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
