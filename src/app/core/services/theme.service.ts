import { Injectable, signal, computed, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // Signal luu trang thai theme hien tai
  // Giong useState trong React: const [theme, setTheme] = useState('light')
  theme = signal<Theme>(this.getInitialTheme());

  // Computed - tu dong tinh toan khi theme thay doi
  // Giong useMemo: const isDark = useMemo(() => theme === 'dark', [theme])
  isDark = computed(() => this.theme() === 'dark');

  constructor() {
    // Effect - chay side effect moi khi theme thay doi
    // Giong useEffect trong React: useEffect(() => { ... }, [theme])
    effect(() => {
      const currentTheme = this.theme();
      const html = document.documentElement;

      if (currentTheme === 'dark') {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }

      localStorage.setItem('theme', currentTheme);
    });
  }

  toggleTheme(): void {
    this.theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  private getInitialTheme(): Theme {
    // 1. Check localStorage truoc
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }

    // 2. Neu chua co, check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  }
}
