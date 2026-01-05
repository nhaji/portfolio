import { PeriodModel } from "./period.model";

export interface StudyModel {
  id: number;
  degree: string;
  university: string;
  period: PeriodModel;
}
