import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RendererService } from './renderer.service';
import { LocalStorageService } from './local-storage.service';
import { Title } from '@angular/platform-browser';

type LanguageCode = 'ar' | 'en' | 'fr';

export interface Language {
  code: LanguageCode;
  label: string;
  direction?: 'ltr' | 'rtl';
}

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly languageKey = 'language';
  private translate = inject(TranslateService);
  private renderer = inject(RendererService);
  private localStorage = inject(LocalStorageService);
  private title = inject(Title);
  private currentLang = signal<string>('en');
  private readonly languages : Array<Language> = [
    { code: 'ar', label: 'العربية', direction: 'rtl' },
    { code: 'en', label: 'English', direction: 'ltr' },
    { code: 'fr', label: 'Français', direction: 'ltr' }
  ];

  constructor() {
    this.loadLanguagesPreferences();
  }

  private loadLanguagesPreferences() {
    this.translate.addLangs(this.languages.map(lang => lang.code));
    const storedLanguage = this.localStorage.getItem<string>(this.languageKey);
    if (storedLanguage) {
      this.setLanguage(storedLanguage);
    } else {
      this.setLanguage(this.translate.getBrowserLang());
    }
  }

  setLanguage(lang: string | undefined) {
    if (lang === undefined || this.translate.getLangs().indexOf(lang) == -1) {
      lang = 'en';
    }
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.translate.use(lang);
    this.renderer.setAttribute('dir', dir);
    this.renderer.setAttribute('lang', lang);
    this.currentLang.set(lang);
    this.localStorage.setItem(this.languageKey, lang);
    this.translate.get('APP.TITLE')
      .subscribe((res: string) => {
        this.title.setTitle(res)
      });
  }

  getCurrentLang() {
    return this.currentLang;
  }

  getLanguages() {
    return this.languages;
  }
}
