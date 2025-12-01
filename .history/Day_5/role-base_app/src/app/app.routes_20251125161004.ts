import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Admin } from './components/admin/admin';
import { adminGuard } from './guards/admin-guard';

export const routes: Routes = [
  {
    path: 'login',
    component: Login
  },
  {
    path: 'admin',
    component: Admin,
    canActivate: [adminGuard]
  },
  {
    path: 'admin',
    component: Admin,
    canActivate: [adminGuard]
  },
];
