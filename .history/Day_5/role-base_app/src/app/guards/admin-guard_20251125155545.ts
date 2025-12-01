import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const auth = inject
  return true;
};
