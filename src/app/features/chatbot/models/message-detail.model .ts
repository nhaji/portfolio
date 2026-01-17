import { SessionStatusModel } from "./session-status.model";

export interface MessageDetailModel {
  text: string;
  isUser: boolean;
  isAI: boolean;
  status: SessionStatusModel;
}
