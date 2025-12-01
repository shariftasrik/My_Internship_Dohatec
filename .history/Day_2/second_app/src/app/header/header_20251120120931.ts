import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, RouterLinkActiveOptions],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
