import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResourceApi } from './components/resource-api/resource-api';
import { HttpClientModule } from '@angular/common/http';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ResourceApi, HttpClientModule, Navbar],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Auth_Routes');
  loggedUserName: string='';

  constructor(){
    
  }
}
