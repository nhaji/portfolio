export interface MessageModel {
  id?: number;
  isCurrentUser?: boolean;
  text: string;
  timestamp?: Date;
}
