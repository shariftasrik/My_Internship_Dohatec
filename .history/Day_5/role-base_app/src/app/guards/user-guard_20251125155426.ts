import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const userGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router)
  return true;
};
