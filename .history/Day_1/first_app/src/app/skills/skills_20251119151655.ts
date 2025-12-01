import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
   protected readonly skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'Angular', level: 90, category: 'frontend' },
        { name: 'TypeScript', level: 85, category: 'frontend' },
        { name: 'HTML/CSS', level: 95, category: 'frontend' },
        { name: 'React', level: 80, category: 'frontend' },
        { name: 'Tailwind CSS', level: 85, category: 'frontend' }
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 85, category: 'backend' },
        { name: 'Express', level: 80, category: 'backend' },
        { name: 'PostgreSQL', level: 75, category: 'backend' },
        { name: 'MongoDB', level: 80, category: 'backend' },
        { name: 'REST APIs', level: 90, category: 'backend' }
      ]
    },
  ]
}
