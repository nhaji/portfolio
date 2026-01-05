import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrl: './profile-section.component.css',
  imports: [CommonModule, MatCardModule, MatIconModule, TranslateModule],
})
export class ProfileSectionComponent {
  title = input.required<string>();
  icon = input<string>('category');
  prefixColorClass = input<string>();
  shadow = input<boolean>(true);
  shadowColorClass = input<string>();
  prefixTextColorClass = input<string>();
  insetShadowColorClass = input<string>();

  readonly combinedClasses = computed(() => {
    const base = 'profile-section-card profile-card animate-fade-in';
    const shadowClass = this.shadow()
      ? `profile-card-shadow ${this.shadowColorClass()} ${this.insetShadowColorClass()}`
      : '';
    return `${base} ${shadowClass}`;
  });
}
