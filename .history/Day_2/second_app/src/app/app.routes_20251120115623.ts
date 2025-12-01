import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { Product } from './product/product';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'login', component:Login },
  { path: '', component:Home },
  { path: 'product', component:Product },
  { path: 'about', component:About },
  { path: 'contact', component:Contact }
];
