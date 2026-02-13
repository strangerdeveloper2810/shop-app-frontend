import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';

// Function-based guard - don gian hon class-based rat nhieu
// Giong nhu middleware check auth trong Express:
//   if (!token) return res.redirect('/login')
export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  const token = tokenService.getToken();

  if (token) {
    // Co token -> cho phep truy cap
    return true;
  }

  // Khong co token -> redirect ve login
  router.navigate(['/login']);
  return false;
};
