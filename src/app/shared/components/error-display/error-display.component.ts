import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-error-display',
  imports: [CommonModule, MatIconModule, TranslateModule, MatCardModule],
  templateUrl: './error-display.component.html',
  styleUrl: './error-display.component.css',
})
export class ErrorDisplayComponent {
  message = input<string>('ERROR.FETCH_FAILED');
  details = input<string | null>(null);
}
