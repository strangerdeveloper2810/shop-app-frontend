import { Component, ViewChild, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginDTO } from '../../dtos/login.dtos';
import { UserService } from '../../services/user.service';
import { LoginResponse } from '../../response/LoginResponse';
import { TokenService } from '../../../../core/services/token.service';
import { LucideAngularModule, Phone, Lock } from 'lucide-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, NgIf, RouterLink, LucideAngularModule],
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm!: NgForm;

  private router = inject(Router);
  private userService = inject(UserService);
  private tokenService = inject(TokenService);

  phone: string = '';
  password: string = '';
  rememberMe: boolean = true;

  // Lucide icons
  PhoneIcon = Phone;
  LockIcon = Lock;

  onPhoneChange() {
    console.log(`phone typed: ${this.phone}`);
  }

  login() {
    // Mặc định role_id: 1 (user), admin sẽ có route riêng
    const loginDTO: LoginDTO = {
      phone_number: this.phone,
      password: this.password,
      role_id: 1,
    };

    this.userService.login(loginDTO).subscribe({
      next: (response: LoginResponse) => {
        const { token } = response;
        if (this.rememberMe) {
          this.tokenService.setToken(token);
        }
        // Navigate to home after successful login
        this.router.navigate(['/home']);
      },
      complete: () => {},
      error: (error: any) => {
        const message = error.error?.message || error.message || 'Login failed';
        alert(`Can't login: ${message}`);
        console.error('Login error:', error);
      },
    });
  }
}
