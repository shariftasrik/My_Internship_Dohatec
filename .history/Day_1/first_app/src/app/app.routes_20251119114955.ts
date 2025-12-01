import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';
import { Background } from './background/background';

export const routes: Routes = [
  {path: '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'skills', component: Skills },
  { path: 'background', component: Background },
  { path: 'contact', component: Contact },
];
