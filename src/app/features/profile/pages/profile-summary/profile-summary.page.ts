import { Component, inject } from '@angular/core';
import { ProfileHeaderComponent } from '../../components/profile-header/profile-header.component';
import { ProfileContactComponent } from '../../components/profile-contact/profile-contact.component';
import { ProfileLanguagesComponent } from '../../components/profile-languages/profile-languages.component';
import { ProfileSkillsComponent } from '../../components/profile-skills/profile-skills.component';
import { ProfileStudiesComponent } from '../../components/profile-studies/profile-studies.component';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router'; 
import { ProfileKeyPointsComponent } from '../../components/profile-key-points/profile-key-points.component';
import { CommonModule } from '@angular/common';
import { ProfileStore } from '../../stores/profile.store';
import { ProfileSectionComponent } from '../../components/profile-section/profile-section.component';
import { ErrorDisplayComponent } from '../../../../shared/components/error-display/error-display.component';
import { SkeletonComponent } from '../../../../shared/components/skeleton/skeleton.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { PROFILE_DETAIL_ROUTE } from '../../profile.routes';

@Component({
  selector: 'app-profile-summary',
  imports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    
    SkeletonComponent,
    ErrorDisplayComponent,
    ProfileSectionComponent, 
    ProfileHeaderComponent,
    ProfileContactComponent,
    ProfileKeyPointsComponent,
    ProfileLanguagesComponent,
    ProfileSkillsComponent,
    ProfileStudiesComponent,
  ],
  templateUrl: './profile-summary.page.html',
  styleUrl: './profile-summary.page.css',
})
export class ProfileSummaryPage {

  private profileStore = inject(ProfileStore);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  profileSummary = this.profileStore.profileSummaryResource;
  profileKeyPoints = this.profileStore.keyPointsResource;
  profileLanguages = this.profileStore.languagesResource;
  profileSkills = this.profileStore.skillsResource;
  profileStudies = this.profileStore.studiesResource;
  profileContacts = this.profileStore.contactsResource;

  ngOnInit(): void {
 
  }

  navigateToDetails(){
    this.router.navigate([PROFILE_DETAIL_ROUTE], { relativeTo: this.route });
  }
}
