import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResourceApi } from './components/resource-api/resource-api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ResourceApi, Htt],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Auth_Routes');
}
