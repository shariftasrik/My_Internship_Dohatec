import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Auth } from '../services/auth';

export const userGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Ro)
  return true;
};
