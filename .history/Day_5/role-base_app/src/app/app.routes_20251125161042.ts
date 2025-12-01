import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Admin } from './components/admin/admin';
import { adminGuard } from './guards/admin-guard';
import { User } from './components/user/user';
import { userGuard } from './guards/user-guard';

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
    path: 'user',
    component: User,
    canActivate: [userGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    
  }
];
