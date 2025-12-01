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
      role: 'Senior Frontend Developer',
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
    {
      role: 'Full Stack Developer',
      company: 'Startup Innovations',
      period: '2020 - 2022',
      description: 'Built and maintained full-stack web applications',
      achievements: [
        'Developed RESTful APIs using Node.js and Express',
        'Created responsive user interfaces with React',
        'Collaborated with design team on UX improvements',
        'Reduced database query time by 50%'
      ]
    },
    {
      role: 'Junior Developer',
      company: 'WebDev Agency',
      period: '2019 - 2020',
      description: 'Started career building client websites and web applications',
      achievements: [
        'Delivered 15+ client projects on time',
        'Learned modern web development best practices',
        'Contributed to open-source projects',
        'Gained experience with version control and agile methodologies'
      ]
    }
  ];

  protected readonly education: Education[] = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      period: '2015 - 2019',
      description: 'Focused on software engineering, algorithms, and web technologies'
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Coding Academy',
      period: '2018',
      description: 'Intensive program covering MERN stack and modern web development'
    }
  ];

  protected readonly certifications: Certification[] = [
    {
      name: 'Angular Professional Certification',
      issuer: 'Angular',
      year: '2023'
    },
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      year: '2022'
    },
    {
      name: 'Professional Scrum Master',
      issuer: 'Scrum.org',
      year: '2021'
    }
  ];
}
