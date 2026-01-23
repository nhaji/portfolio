import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, Signal, signal } from '@angular/core';
import { ChatbotInputComponent } from '../../components/chatbot-input/chatbot-input.component';
import { ChatbotMessageComponent } from '../../components/chatbot-message/chatbot-message.component';
import { ChatbotHeaderComponent } from '../../components/chatbot-header/chatbot-header.component';
import { ChatbotStatus, ChatBotStore } from '../../stores/chat-bot.store';
import { Router } from '@angular/router';
import { CONTACT_ROUTE } from '../../../contact/contact.routes';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { PROFILE_ROUTE } from '../../../profile/profile.routes';

@Component({
  selector: 'app-chatbot-stream',
  imports: [CommonModule, ChatbotInputComponent, ChatbotMessageComponent, ChatbotHeaderComponent, LoaderComponent],
  templateUrl: './chatbot-stream.page.html',
  styleUrl: './chatbot-stream.page.css',
})
export class ChatbotStreamPage implements OnInit {
  store = inject(ChatBotStore);
  private router = inject(Router);

  maxAllowedMessages = signal<number>(7);
  isAuthorized : Signal<boolean> = computed(() => this.store.status() === ChatbotStatus.AUTHORIZED);
  isSending : Signal<boolean> = computed(() => this.store.status() === ChatbotStatus.SENDING);

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

  onImageClicked(): void{
    this.router.navigate([PROFILE_ROUTE]);
  }

  onContactClicked(): void{
    this.router.navigate([CONTACT_ROUTE]);
  }
}
