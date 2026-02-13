import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Github, Mail, Phone, Twitter } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    RouterLink,
    LucideAngularModule
  ],
})
export class FooterComponent {
  // Current year for copyright
  currentYear: number = new Date().getFullYear();

  // Lucide icons (imported for registration)
  readonly Github = Github;
  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly Twitter = Twitter;
}
