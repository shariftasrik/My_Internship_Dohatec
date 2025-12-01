import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  {path: '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'skills', component: Skills },
  { path: 'background', component: Background },
  { path: 'contact', component: ContactComponent },
];
