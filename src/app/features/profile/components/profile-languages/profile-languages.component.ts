import { Component, input } from '@angular/core';
import { LanguageModel } from '../../models/language.model';
import { LanguageLevel } from '../../models/language-level.enum';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-profile-languages',
  templateUrl: './profile-languages.component.html',
  styleUrl: './profile-languages.component.css',
  imports: [CommonModule, MatCardModule, MatIconModule, TranslateModule],
})
export class ProfileLanguagesComponent {
  languages = input.required<LanguageModel[]>();

  getLanguageIcon(level: LanguageLevel): string {
    switch (level) {
      case LanguageLevel.NATIVE.toUpperCase():
        return 'translate';
      case LanguageLevel.FLUENT.toUpperCase():
        return 'chat';
      case LanguageLevel.INTERMEDIATE.toUpperCase():
        return 'menu_book';
      default:
        return 'person';
    }
  }
  
}
