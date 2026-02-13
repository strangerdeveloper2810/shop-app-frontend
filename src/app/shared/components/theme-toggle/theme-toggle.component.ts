import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { LucideAngularModule, Sun, Moon } from 'lucide-angular';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [NgIf, LucideAngularModule],
  template: `
    <button
      (click)="themeService.toggleTheme()"
      class="relative p-2.5 rounded-xl
             bg-slate-100 dark:bg-slate-800
             hover:bg-slate-200 dark:hover:bg-slate-700
             transition-all duration-200
             hover:scale-110 active:scale-95"
      [attr.aria-label]="themeService.isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      <lucide-icon
        *ngIf="themeService.isDark()"
        [img]="SunIcon"
        [size]="20"
        class="text-amber-400"
      ></lucide-icon>
      <lucide-icon
        *ngIf="!themeService.isDark()"
        [img]="MoonIcon"
        [size]="20"
        class="text-slate-600"
      ></lucide-icon>
    </button>
  `,
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);
  SunIcon = Sun;
  MoonIcon = Moon;
}
