import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResourceApi } from './components/resource-api/resource-api';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ResourceApi, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Auth_Routes');
}
