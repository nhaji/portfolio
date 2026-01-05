import { Component, input } from '@angular/core';
import { ExperienceModel } from '../../models/experience.model';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { LocalizedDatePipe } from '../../../../core/pipes/localized-date-pipe';

@Component({
  selector: 'app-profile-experiences',
  templateUrl: './profile-experiences.component.html',
  styleUrl: './profile-experiences.component.css',
  imports: [
    CommonModule,
    LocalizedDatePipe,
    MatCardModule,
    MatChipsModule,
    TranslateModule,
  ],
})
export class ProfileExperiencesComponent {
  experiences = input.required<ExperienceModel[]>();

  getCardColorClasse(index: number): string {
    const colorClasses = ['primary', 'secondary', 'quinary', 'tertiary', 'quaternary'];
    return colorClasses[index % colorClasses.length];
  }
}
