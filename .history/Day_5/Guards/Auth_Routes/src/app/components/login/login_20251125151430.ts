import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  router = inject(Router);

  loginForm = {
    email: '',
    password: ''
  };

  onSubmit() {
    if (this.loginForm.email === 'admin@gmail.com' && this.loginForm.password === '1122') {
      this.router.navigateByUrl('/admin');
      localStorage;
    } else {
      alert('Wrong credential');
    }
  }
}
