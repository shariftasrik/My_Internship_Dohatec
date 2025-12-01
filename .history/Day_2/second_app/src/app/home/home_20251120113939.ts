import { Component } from '@angular/core';
import { Header } from '../header/header';

@Component({
  selector: 'app-home',
  imports: [Header],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
