import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/components/login/login.component').then(
        (m) => m.LoginComponent,
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/components/register/register.component').then(
        (m) => m.RegisterComponent,
      ),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./features/product/detail-product/detail-product.component').then(
        (m) => m.DetailProductComponent,
      ),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./features/order/order/order.component').then(
        (m) => m.OrderComponent,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'orders/confirm',
    loadComponent: () =>
      import('./features/order/order-confirm/order-confirm.component').then(
        (m) => m.OrderConfirmComponent,
      ),
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: '/home' },
];

export default routes;
