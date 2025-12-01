import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users=['anil', 'sam', 'peter', 'bruce', 'john']
}
