import { CommonModule } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { ImageComponent } from '../../../../shared/components/image/image.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-chatbot-header',
  imports: [CommonModule, TranslateModule, ImageComponent, MatIcon],
  templateUrl: './chatbot-header.component.html',
  styleUrl: './chatbot-header.component.css',
})
export class ChatbotHeaderComponent {
  maxMessages = input.required<number>();
  usedMessages = input.required<number>();
  imageClick = output();
  contactClick = output();

  progressPercentage = computed(() => {
    if (this.maxMessages() === 0) return 0;
    return (this.usedMessages() / this.maxMessages()) * 100;
  });

  onImageClick(): void {
    this.imageClick.emit();
  }

  onContactClick(): void{
    this.contactClick.emit();
  }

}
