import { Component, inject } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  auth = inject(Auth);
  router = inject(Router);

  loginForm = {
    email: '',
    password: ''
  }

  onSubmit(){
    if(this.loginForm.email === 'admin@gmail.com' && this.loginForm.password === '1122'){
      this.auth.login('admin');
      this.router.navigateByUrl('/admin');
    }else if(this.loginForm.email === 'user@gmail.com' && this.loginForm.password)
  }
}
