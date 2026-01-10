import { CommonModule } from '@angular/common';
import { Component, output, signal } from '@angular/core';
import { form, Field } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-chatbot-input',
  imports: [CommonModule, TranslateModule, Field, MatIconModule, MatButtonModule, InputComponent],
  templateUrl: './chatbot-input.component.html',
  styleUrl: './chatbot-input.component.css',
})
export class ChatbotInputComponent {
  sendMessage = output<string>();
  messageModel = signal({ text: '' });
  messageForm = form(this.messageModel);

  onSendMessage() {
    const messageText = this.messageForm.text().value();
    if (messageText && messageText.trim().length > 0) {
      this.sendMessage.emit(messageText);
      this.messageForm.text().value.set('');
    }
  }
}
