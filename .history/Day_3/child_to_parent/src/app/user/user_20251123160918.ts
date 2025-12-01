import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Output()
  users=['anil','sam','peter','bruce','john'];
}
