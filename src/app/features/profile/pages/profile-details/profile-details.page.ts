import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { ProfileExperiencesComponent } from '../../components/profile-experiences/profile-experiences.component';
import { CommonModule } from '@angular/common';
import { ErrorDisplayComponent } from '../../../../shared/components/error-display/error-display.component';
import { ProfileStore } from '../../stores/profile.store';
import { ProfileSectionComponent } from '../../components/profile-section/profile-section.component';
import { SkeletonComponent } from '../../../../shared/components/skeleton/skeleton.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-profile-details',
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,

    SkeletonComponent,
    ErrorDisplayComponent,
    ProfileSectionComponent,
    ProfileExperiencesComponent,
  ],
  templateUrl: './profile-details.page.html',
  styleUrl: './profile-details.page.css',
})
export class ProfileDetailsPage {

  profileStore = inject(ProfileStore);

  profileExperiences = this.profileStore.experiencesResource;

  ngOnInit(): void {
  }

}
