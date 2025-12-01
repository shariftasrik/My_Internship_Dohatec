import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  role = signal<string>('');

  constructor(){
    const savedRole = localStorage.getItem("role");

    if(savedRole){
      this.role.set(savedRole);
    }

  }

  login(role: string){
    this.role.set(role);
    localStorage.setItem("role", role);
  }

  logout(){
    this.role.set('');
    localStorage.removeItem("role");
  }

  getRole
}
