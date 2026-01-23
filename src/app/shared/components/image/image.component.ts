import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';

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
  click = output();

  onImageLoad(): void {
    this.isImageLoaded.set(true);
  }

  onImageError(): void {
    this.isImageLoaded.set(true);
  }

  onImageClick(): void {
    this.click.emit()
  }
}
