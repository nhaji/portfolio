import { Component, input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { StudyModel } from '../../models/study.model';
import { LocalizedDatePipe } from '../../../../core/pipes/localized-date-pipe';

@Component({
  selector: 'app-profile-studies',
  templateUrl: './profile-studies.component.html',
  styleUrl: './profile-studies.component.css',
  imports: [CommonModule, LocalizedDatePipe, MatCardModule, MatIconModule, TranslateModule],
})
export class ProfileStudiesComponent {
  studies = input.required<StudyModel[]>();
}
