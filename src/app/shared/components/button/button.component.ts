import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  imports: [CommonModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  text = input<string>();
  icon = input<string>();
  primary = input<boolean>(false);
  clicked = output<void>();

  onClick() {
    this.clicked.emit();
  }
}
