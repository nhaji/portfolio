import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { Language, LanguageService } from './core/services/language.service';
import { ThemeService } from './core/services/theme.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { SettingsComponent } from './shared/components/settings/settings.component';
import { PreventService } from './core/services/prevent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    CommonModule,
    RouterOutlet,
    TranslatePipe,
    SettingsComponent
  ],
})
export class App implements OnInit{
  protected readonly currentYear = new Date().getFullYear();

  private langService = inject(LanguageService);
  private themeService = inject(ThemeService);
  private preventService = inject(PreventService);

  isDarkMode = this.themeService.getIsDarkMode();
  currentLang = this.langService.getCurrentLang();
  languages: Array<Language> = this.langService.getLanguages();

  constructor(){
  }

  ngOnInit() {
    this.preventService.enable();
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }

  changeLanguage(lang: string) {
    this.langService.setLanguage(lang);
  }

  showSettingsPanel = false;

  toggleSettings() {
    this.showSettingsPanel = !this.showSettingsPanel;
  }

}

