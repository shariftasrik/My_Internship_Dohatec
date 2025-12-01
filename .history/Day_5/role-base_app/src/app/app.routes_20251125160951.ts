import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Admin } from './components/admin/admin';

export const routes: Routes = [
  {
    path: 'login',
    component: Login
  },
  {
    path: 'admin',
    component: Admin,
    canActivate:
  },
];
