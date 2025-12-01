import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [rou],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Lazy_Loading');
}
