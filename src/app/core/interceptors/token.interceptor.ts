import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';

// Function-based interceptor - giong middleware trong Express.js
// Nhan request -> xu ly -> pass tiep (giong nhu (req, res, next) => {})
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const token = tokenService.getToken();

  if (token) {
    // Clone request va them Authorization header
    // Phai clone vi HttpRequest la immutable (khong the thay doi truc tiep)
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(req);
};
