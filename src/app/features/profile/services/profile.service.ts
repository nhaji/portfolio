import { inject, Injectable } from '@angular/core';
import { ExperienceModel } from '../models/experience.model';
import { ProfileModel } from '../models/profile.model';
import { HttpService } from '../../../core/services/http.service';
import { ContactModel } from '../models/contact.model';
import { LanguageModel } from '../models/language.model';
import { SkillModel } from '../models/skill.model';
import { StudyModel } from '../models/study.model';
import { KeyPointModel } from '../models/key-point.model';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService extends HttpService {
  private readonly artificialDelayMs = 1500; 

  getProfileSummary(): Observable<ProfileModel> {
    return this.get<ProfileModel>(`/profile-summary.json`, true)
    .pipe(delay(this.artificialDelayMs)); 
  }

  getExperiences(): Observable<ExperienceModel[]> {
    return this.get<ExperienceModel[]>(`/experiences.json`, true)
    .pipe(delay(this.artificialDelayMs));
  }

  getContacts(): Observable<ContactModel[]> {
    return this.get<ContactModel[]>(`/contacts.json`, true)
    .pipe(delay(this.artificialDelayMs));
  }

  getKeyPoints(): Observable<KeyPointModel[]> {
    return this.get<KeyPointModel[]>(`/key-points.json`, true)
    .pipe(delay(this.artificialDelayMs));
  }

  getLanguages(): Observable<LanguageModel[]> {
    return this.get<LanguageModel[]>(`/languages.json`, true)
    .pipe(delay(this.artificialDelayMs));
  }

  getSkills(): Observable<SkillModel[]> {
    return this.get<SkillModel[]>(`/skills.json`, true)
    .pipe(delay(this.artificialDelayMs));
  }

  getStudies(): Observable<StudyModel[]> {
    return this.get<StudyModel[]>(`/studies.json`, true)
    .pipe(delay(this.artificialDelayMs));
  }
}
