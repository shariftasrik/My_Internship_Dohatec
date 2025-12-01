import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyConverterPipe } from './pipe/currency-converter-pipe';

@Component({
  selector: 'app-root',
  imports: [CommonModule, CurrencyConverterPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  amount = 10;
}
