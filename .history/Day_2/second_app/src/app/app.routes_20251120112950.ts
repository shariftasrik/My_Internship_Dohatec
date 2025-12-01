import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { Product } from './product/product';

export const routes: Routes = [
  {}
  { path: 'login', component:Login },
  { path: 'home', component:Home },
  { path: 'product', component:Product }
];
