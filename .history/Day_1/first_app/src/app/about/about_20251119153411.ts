import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly profile = {
    name: 'Nimur Rahman Sharif',
    title: 'Full Stack Developer',
    bio: 'Passionate developer with expertise in building modern web applications.',
    interest: [
      'Web Development',
      'Mobile Application Development'
    ]
  }
}
