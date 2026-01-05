import { PeriodModel } from "./period.model";

export interface ExperienceModel {
  id: number;
  title: string;
  company: string;
  location: string;
  period: PeriodModel;
  description: string;
  tags: string[];
}
