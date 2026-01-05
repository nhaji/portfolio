import { Component, input, output } from '@angular/core';
import { Language } from '../../../core/services/language.service';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSlideToggleModule,
    TranslatePipe
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {

  isDarkMode = input.required<boolean>();
  currentLang = input.required<string>();
  languages = input.required<Array<Language>>();
  onToggleTheme = output();
  onChangeLanguage = output<string>();
  showSettingsPanel = false;

  toggleTheme() {
    this.onToggleTheme.emit();
  }

  changeLanguage(lang: string) {
    this.onChangeLanguage.emit(lang);
  } 

  toggleSettings() {
    this.showSettingsPanel = !this.showSettingsPanel;
  }

}
