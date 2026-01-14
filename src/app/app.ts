import { Component, inject, OnInit, signal } from '@angular/core';
import { Language, LanguageService } from './core/services/language.service';
import { ThemeService } from './core/services/theme.service';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { SettingsComponent } from './shared/components/settings/settings.component';
import { PreventService } from './core/services/prevent.service';
import { ChatbotFabComponent } from './features/chatbot/components/chatbot-fab/chatbot-fab.component';
import { CHATBOT_ROUTE } from './features/chatbot/chatbot.routes';
import { AppStore } from './app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CommonModule, RouterOutlet, TranslatePipe, SettingsComponent, ChatbotFabComponent],
})
export class App implements OnInit {
  protected readonly currentYear = new Date().getFullYear();
  protected isChatbotRoute = signal<boolean>(false);

  private router = inject(Router);
  private langService = inject(LanguageService);
  private themeService = inject(ThemeService);
  private preventService = inject(PreventService);
  private appStore = inject(AppStore);

  connection = this.appStore.connectRessource;

  isDarkMode = this.themeService.getIsDarkMode();
  currentLang = this.langService.getCurrentLang();
  languages: Array<Language> = this.langService.getLanguages();

  constructor() {
  }

  ngOnInit() {
    this.preventService.enable();
    this.isChatbotRoute = this.appStore.isChatbotRoute;
  }

  navigateToChatbot() {
    this.router.navigate([CHATBOT_ROUTE]);
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
