import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly profile = {
    name: 'Nimur Rahman Sharif',
    title: 'Full Stack Developer',
    bio: 'Passionate developer with expertise in building'
  }
}
