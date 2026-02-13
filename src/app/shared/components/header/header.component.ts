import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Menu, X, ShoppingCart, User, LogOut } from 'lucide-angular';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { TokenService } from '../../../core/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    LucideAngularModule,
    ThemeToggleComponent,
  ],
})
export class HeaderComponent {
  private tokenService = inject(TokenService);
  private router = inject(Router);

  // Mobile menu state
  isMobileMenuOpen = false;

  // Lucide icons
  readonly Menu = Menu;
  readonly X = X;
  readonly ShoppingCart = ShoppingCart;
  readonly User = User;
  readonly LogOut = LogOut;

  // Check xem user đã login chưa dựa vào accessToken
  get isLoggedIn(): boolean {
    return !!this.tokenService.getToken();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  // Đăng xuất - xoá token và redirect về login
  logout(): void {
    this.tokenService.removeToken();
    this.closeMobileMenu();
    this.router.navigate(['/login']);
  }
}
