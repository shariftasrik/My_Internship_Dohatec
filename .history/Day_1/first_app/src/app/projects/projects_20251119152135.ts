import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
protected readonly projects = signal<Project[]>([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with product management, cart functionality, and payment integration.',
      image: '🛍️',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      github: '',
      demo: '',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team features, and analytics dashboard.',
      image: '✓',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      github: 'https://github.com/yourusername/taskapp',
      demo: 'https://tasks.example.com',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather application with location search, forecasts, and beautiful data visualizations.',
      image: '🌤️',
      technologies: ['Angular', 'RxJS', 'Chart.js', 'OpenWeather API'],
      github: 'https://github.com/yourusername/weather',
      status: 'in-progress'
    },
    {
      id: 4,
      title: 'Portfolio CMS',
      description: 'Content management system for developers to easily manage and showcase their portfolio projects.',
      image: '📝',
      technologies: ['Angular', 'Express', 'PostgreSQL', 'JWT'],
      status: 'planned'
    }
  ]);

}
