import { KeyPointType } from "./key-point-type.enum";

export interface KeyPointModel {
  id: number;
  icon: string;
  value: string;
  type: KeyPointType;

}
