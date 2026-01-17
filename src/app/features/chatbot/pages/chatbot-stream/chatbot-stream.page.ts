import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ChatbotInputComponent } from '../../components/chatbot-input/chatbot-input.component';
import { ChatbotMessageComponent } from '../../components/chatbot-message/chatbot-message.component';
import { ChatbotHeaderComponent } from '../../components/chatbot-header/chatbot-headercomponent';
import { MessageModel } from '../../models/message.model';
import { ChatbotStatus, ChatBotStore } from '../../stores/chat-bot.store';

@Component({
  selector: 'app-chatbot-stream',
  imports: [CommonModule, ChatbotInputComponent, ChatbotMessageComponent, ChatbotHeaderComponent],
  templateUrl: './chatbot-stream.page.html',
  styleUrl: './chatbot-stream.page.css',
})
export class ChatbotStreamPage implements OnInit{
  store = inject(ChatBotStore);

  maxAllowedMessages = signal<number>(7);

  ngOnInit(): void {
    this.store.init();
  }

  onSendMessage(messageText: string) {
    if (messageText.trim() === '') return;
    this.store.send(messageText);
  }

}
