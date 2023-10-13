import { CanActivateFn, CanDeactivateFn } from '@angular/router';
import { AutheticationService } from './../services/authetication.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  return inject(AutheticationService).logGuard;
};


