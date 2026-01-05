import { effect, inject, Injectable, resource } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { firstValueFrom } from 'rxjs';
import { LanguageService } from '../../../core/services/language.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileStore {
  private service = inject(ProfileService);
  private languageService = inject(LanguageService);

  constructor() {
    effect(() => {
      this.languageService.getCurrentLang()();
      this.reloadAll();
    });
  }

  profileSummaryResource = resource({
    loader: () => firstValueFrom(this.service.getProfileSummary()),
  });

  experiencesResource = resource({
    loader: () => firstValueFrom(this.service.getExperiences()),
  });

  languagesResource = resource({
    loader: () => firstValueFrom(this.service.getLanguages()),
  });

  keyPointsResource = resource({
    loader: () => firstValueFrom(this.service.getKeyPoints()),
  });

  skillsResource = resource({
    loader: () => firstValueFrom(this.service.getSkills()),
  });

  studiesResource = resource({
    loader: () => firstValueFrom(this.service.getStudies()),
  });

  contactsResource = resource({
    loader: () => firstValueFrom(this.service.getContacts()),
  });

  reloadAll(): void {
    this.profileSummaryResource.reload();
    this.experiencesResource.reload();
    this.languagesResource.reload();
    this.keyPointsResource.reload();
    this.skillsResource.reload();
    this.studiesResource.reload();
    this.contactsResource.reload();
  }
}
