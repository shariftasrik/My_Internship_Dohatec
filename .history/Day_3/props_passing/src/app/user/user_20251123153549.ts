import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  standalone
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input() user:string='';
  @Input() city:string='';
}
