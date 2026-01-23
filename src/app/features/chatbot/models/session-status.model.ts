export interface SessionStatusModel {
  isAllowed: boolean;
  usedMessages: number;
  maxAllowedMessages: number;
  chatId: number;
  sessionId: number;
  guestId: number;
}
