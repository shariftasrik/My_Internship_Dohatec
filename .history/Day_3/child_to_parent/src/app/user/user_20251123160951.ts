import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Output() getUsers = new EventEmitter();
  users=['anil','sam','peter','bruce','john'];
}
