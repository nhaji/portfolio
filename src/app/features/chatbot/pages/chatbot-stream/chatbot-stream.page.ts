import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ChatbotInputComponent } from '../../components/chatbot-input/chatbot-input.component';
import { ChatbotMessageComponent } from '../../components/chatbot-message/chatbot-message.component';
import { ChatbotHeaderComponent } from '../../components/chatbot-header/chatbot-headercomponent';
import { MessageModel } from '../../models/message.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-chatbot-stream',
  imports: [CommonModule, ChatbotInputComponent, ChatbotMessageComponent, ChatbotHeaderComponent],
  templateUrl: './chatbot-stream.page.html',
  styleUrl: './chatbot-stream.page.css',
})
export class ChatbotStreamPage implements OnInit{
  private translate = inject(TranslateService);

  private defaultMessage: MessageModel | undefined;

  messages = signal<MessageModel[]>([]);
  maxAllowedMessages = signal<number>(7);
  usedMessages = signal<number>(0); 

  ngOnInit(): void {
   this.loadData();
  }


  onSendMessage(messageText: string) {
    if (messageText.trim() === '') return;

    const newMessage: MessageModel = {
      id: new Date().getTime(),
      isCurrentUser: true,
      message: messageText,
      timestamp: new Date(),
    };

    this.messages.update((currentMessages) => [...currentMessages, newMessage, this.defaultMessage!]);
    this.usedMessages.update((count) => count + 1);
  }

  private loadData(){
    this.translate.stream(('CHATBOT.INITIAL_MESSAGE')).subscribe((res: string) => {
      const initialMessage = {
        id: new Date().getTime(),
        isCurrentUser: false,
        message: res,
        timestamp: new Date(),
      };
      this.messages.update((currentMessages) => [...currentMessages, initialMessage]);
    });
    this.translate.stream(('CHATBOT.DEFAULT_MESSAGE')).subscribe((res: string) => {
      this.defaultMessage = {
        id: new Date().getTime(),
        isCurrentUser: false,
        message: res,
        timestamp: new Date(),
      };
    });
  }

}
