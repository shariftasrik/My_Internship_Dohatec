import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  {path: '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'skills', component: SkillsComponent },
  { path: 'background', component: BackgroundComponent },
  { path: 'contact', component: ContactComponent },
];
