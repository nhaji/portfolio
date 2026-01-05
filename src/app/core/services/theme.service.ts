import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { RendererService } from './renderer.service';
import { isPlatformBrowser } from '@angular/common';

type ThemeMode = 'system' | 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly themeKey = 'theme';
  private platformId = inject(PLATFORM_ID);
  private renderer = inject(RendererService);
  private localStorage = inject(LocalStorageService);
  private isDarkMode = signal<boolean>(false);

  constructor() {
    this.loadThemePreferences();
  }

  private loadThemePreferences() {
    const storedTheme = this.localStorage.getItem<string>(this.themeKey);
    if (storedTheme) {
      if (storedTheme === 'dark') {
        this.setTheme('dark');
        this.setDarkMode(true);
      } else {
        this.setTheme('light');
        this.setDarkMode(false);
      }
    } else if (isPlatformBrowser(this.platformId)){
      this.setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light');
    }
    else{
      this.setTheme('dark');
    }
  }

  private setTheme(theme: ThemeMode) {
    const colorScheme = theme === 'system' ? 'light dark' : theme;
    this.renderer.setStyle('color-scheme', colorScheme);
    this.renderer.setAttribute('class', theme)
    this.localStorage.setItem(this.themeKey, theme);
  }

  private setDarkMode(isDarkMode: boolean) {
    this.isDarkMode.set(isDarkMode);
  }

  toggleDarkMode() {
    this.setDarkMode(!this.isDarkMode());
    this.setTheme(this.isDarkMode() ? 'dark' : 'light');
  }

  getIsDarkMode(){
   return this.isDarkMode;
  }
}
