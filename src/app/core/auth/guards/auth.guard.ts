import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthCommonService } from '@core/auth/services/common.service';

export const AuthGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
  const router: Router = inject(Router);
  const authService = inject(AuthCommonService);
  if (authService.getLoginResult()) {
    return of(true);
  }
  router.navigate(['/login']);
  return of(false);
};
