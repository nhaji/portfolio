import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-chatbot-fab',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './chatbot-fab.component.html',
  styleUrl: './chatbot-fab.component.css',
})
export class ChatbotFabComponent {

  onClick = output();

  click() {
    this.onClick.emit();
  }

}
