import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { ChatbotService } from '../services/chatbot.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MessageModel } from '../models/message.model';
import { TranslateService } from '@ngx-translate/core';

export const ChatbotStatus = {
  IDLE: 'idle',
  INITIALIZING: 'initializing',
  AUTHORIZED: 'authorized',
  UNAUTHORIZED: 'unauthorized',
  SENDING: 'sending',
  ERROR: 'error',
} as const;

export type ChatbotStatus = typeof ChatbotStatus[keyof typeof ChatbotStatus];

@Injectable({
  providedIn: 'root',
})
export class ChatBotStore {
  private defaultMessage: MessageModel | undefined;

  private destroyRef = inject(DestroyRef);
  private service = inject(ChatbotService);
  private translate = inject(TranslateService);

  messages = signal<MessageModel[]>([]);
  usedMessages = signal<number>(0);
  status = signal<ChatbotStatus>(ChatbotStatus.IDLE);

  constructor() {
    this.loadData();
  }

  init() {
    this.status.set(ChatbotStatus.INITIALIZING);
    this.service
      .init()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          if (data.isAllowed) {
            this.status.set(ChatbotStatus.AUTHORIZED);
          } else {
            this.status.set(ChatbotStatus.UNAUTHORIZED);
          }
          this.usedMessages.set(data.usedMessages);
        },
        error: () => this.status.set(ChatbotStatus.ERROR),
      });
  }

  send(text: string) {
    const newMessage: MessageModel = {
      id: new Date().getTime(),
      isCurrentUser: true,
      text: text,
      timestamp: new Date(),
    };
    this.messages.update((currentMessages) => [...currentMessages, newMessage]);
    this.status.set(ChatbotStatus.SENDING);
    this.service
      .send({text: text})
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          if (data.status.isAllowed) {
            this.status.set(ChatbotStatus.AUTHORIZED);
          } else {
            this.status.set(ChatbotStatus.UNAUTHORIZED);
          }
          this.usedMessages.set(data.status.usedMessages);
          const receivedMessage = {
            id: new Date().getTime(),
            isCurrentUser: data.isUser,
            text: data.text,
            timestamp: new Date(),
          };
          this.messages.update((currentMessages) => [...currentMessages, receivedMessage]);
          this.usedMessages.set(data.status.usedMessages);
        },
        error: () => this.status.set(ChatbotStatus.ERROR),
      });
  }

  private loadData() {
    this.translate.stream('CHATBOT.INITIAL_MESSAGE').subscribe((res: string) => {
      const initialMessage = {
        id: new Date().getTime(),
        isCurrentUser: false,
        text: res,
        timestamp: new Date(),
      };
      this.messages.update(() => [initialMessage]);
    });
    this.translate.stream('CHATBOT.DEFAULT_MESSAGE').subscribe((res: string) => {
      this.defaultMessage = {
        id: new Date().getTime(),
        isCurrentUser: false,
        text: res,
        timestamp: new Date(),
      };
    });
  }
}
