import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  role = signal<string>('');

  constructor(){
    const savedRole = localStorage.getItem("role");
  }
}
