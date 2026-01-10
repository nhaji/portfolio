import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { ImageComponent } from '../../../../shared/components/image/image.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-chatbot-header',
  imports: [CommonModule, TranslateModule, ImageComponent],
  templateUrl: './chatbot-header.component.html',
  styleUrl: './chatbot-header.component.css',
})
export class ChatbotHeaderComponent {
  maxMessages = input.required<number>();
  usedMessages = input.required<number>();

  progressPercentage = computed(() => {
    if (this.maxMessages() === 0) return 0;
    return (this.usedMessages() / this.maxMessages()) * 100;
  });
}
