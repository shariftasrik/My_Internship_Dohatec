import { Component } from '@angular/core';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
  link?: string;
}

@Component({
  selector: 'app-background',
  imports: [],
  templateUrl: './background.html',
  styleUrl: './background.css',
})
export class Background {
protected readonly experiences: Experience[] = [
    {
      role: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading frontend development for enterprise-level applications',
      achievements: [
        'Architected and implemented scalable Angular applications',
        'Improved application performance by 40%',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines for automated deployments'
      ]
    },

  ];

  protected readonly education: Education[] = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      period: '2015 - 2019',
      description: 'Focused on software engineering, algorithms, and web technologies'
    },
  ];

  protected readonly certifications: Certification[] = [
    {
      name: 'Angular Professional Certification',
      issuer: 'Angular',
      year: '2023'
    },
  ];
}
