import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Users {
  constructor(private http:HttpClient){}

  getUser():Observable<User>{
    const url = "http://localhost:3000/users";
    return this.http.get<User[]>(url);
  }
}
