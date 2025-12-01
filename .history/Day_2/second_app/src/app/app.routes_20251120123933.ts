import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { Product } from './product/product';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';

export const routes: Routes = [
  { path: '', component: Home},
  { path: 'login', component:Login },
  { path: 'product', component:Product },
  { path: 'about', component:About },
  { path: 'contact', component:Contact },
  { path: 'profile', component:Profile },
  { path: '**', component:PageNotFound }
];
