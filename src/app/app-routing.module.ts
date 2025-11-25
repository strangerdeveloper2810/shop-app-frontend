import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { OrderComponent } from './components/order/order.component';
import { OrderConfirmComponent } from './components/order-confirm/order-confirm.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Default route
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]  // Protect route - cần login
  },
  {
    path: 'products/:id',
    component: DetailProductComponent,
    canActivate: [AuthGuard]  // Protect route
  },
  {
    path: 'orders',
    component: OrderComponent,
    canActivate: [AuthGuard]  // Protect route
  },
  {
    path: 'orders/confirm',
    component: OrderConfirmComponent,
    canActivate: [AuthGuard]  // Protect route
  },
  { path: '**', redirectTo: '/login' }  // 404 - redirect về login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
