import { ContactModel } from "./contact.model";
import { ExperienceModel } from "./experience.model";
import { KeyPointModel } from "./key-point.model";
import { LanguageModel } from "./language.model";
import { ProfileStatus } from "./profile-status.enum";
import { SkillModel } from "./skill.model";
import { StudyModel } from "./study.model";

export interface ProfileModel {
  id: number;
  firstName: string;
  lastName: string;
  jobTitle: string;
  bio: string;
  imageUrl: string;
  status: ProfileStatus;
  // Optional for lazy loading
  contacts?: ContactModel[];
  languages?: LanguageModel[];
  skills?: SkillModel[];
  keyPoints?: KeyPointModel[];
  experiences?: ExperienceModel[];
  studies?: StudyModel[];
}
