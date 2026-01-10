import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-image',
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css',
})
export class ImageComponent {
  imgUrl = input.required<string>();
  borderClass = input.required<string>();
  isImageLoaded = signal<boolean>(false);

  onImageLoad(): void {
    this.isImageLoaded.set(true);
  }

  onImageError(): void {
    this.isImageLoaded.set(true);
  }
}
