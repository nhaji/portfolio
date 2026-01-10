import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MessageModel } from '../../models/message.model';
import { LocalizedDatePipe } from '../../../../core/pipes/localized-date-pipe';

@Component({
  selector: 'app-chatbot-message',
  imports: [CommonModule, LocalizedDatePipe],
  templateUrl: './chatbot-message.component.html',
  styleUrl: './chatbot-message.component.css',
})
export class ChatbotMessageComponent {
  message = input.required<MessageModel>();
}
