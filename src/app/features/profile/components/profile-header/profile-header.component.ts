import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileModel } from '../../models/profile.model';
import { ProfileStatus } from '../../models/profile-status.enum';
import { ProfileSectionComponent } from '../profile-section/profile-section.component';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.css',
  imports: [CommonModule, MatCardModule, MatIconModule, MatDividerModule, ProfileSectionComponent, TranslateModule],
})
export class ProfileHeaderComponent {
  profile = input.required<ProfileModel>();

  getStatusClass(status: ProfileStatus): string {
    switch (status) {
      case ProfileStatus.OPEN:
        return 'bg-green-500';
      case ProfileStatus.HIRED:
        return 'bg-blue-500';
      case ProfileStatus.BUSY:
        return 'bg-red-500';
      default:
        return 'bg-gray-400';
    }
  }
}
