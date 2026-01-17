import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  imports: [CommonModule],
  templateUrl: './progress-indicator.component.html',
  styleUrl: './progress-indicator.component.css',
})
export class ProgressIndicatorComponent {

  currentStep = input.required<number>();
  stepCount = input.required<number>();
  showStepNumber = input<boolean>(false);

  steps = computed(() => Array.from({ length: this.stepCount() }, (_, i) => i + 1));

}
