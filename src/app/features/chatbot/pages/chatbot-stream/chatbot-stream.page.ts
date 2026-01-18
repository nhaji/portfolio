import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, Signal, signal } from '@angular/core';
import { ChatbotInputComponent } from '../../components/chatbot-input/chatbot-input.component';
import { ChatbotMessageComponent } from '../../components/chatbot-message/chatbot-message.component';
import { ChatbotHeaderComponent } from '../../components/chatbot-header/chatbot-headercomponent';
import { MessageModel } from '../../models/message.model';
import { ChatbotStatus, ChatBotStore } from '../../stores/chat-bot.store';
import { Router } from '@angular/router';
import { CONTACT_ROUTE } from '../../../contact/contact.routes';

@Component({
  selector: 'app-chatbot-stream',
  imports: [CommonModule, ChatbotInputComponent, ChatbotMessageComponent, ChatbotHeaderComponent],
  templateUrl: './chatbot-stream.page.html',
  styleUrl: './chatbot-stream.page.css',
})
export class ChatbotStreamPage implements OnInit {
  store = inject(ChatBotStore);
  private router = inject(Router);

  maxAllowedMessages = signal<number>(7);
  isAuthorized : Signal<boolean> = computed(() => this.store.status() === ChatbotStatus.AUTHORIZED);

  ngOnInit(): void {
    this.store.init();
  }

  onSendMessage(messageText: string) {
    if (this.isAuthorized() && messageText.trim() === '') return;
    else if (!this.isAuthorized()) {
      this.router.navigate([CONTACT_ROUTE]);
    } else {
      this.store.send(messageText);
    }
  }
}
