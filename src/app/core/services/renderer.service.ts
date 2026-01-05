import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RendererService {
  private platformId = inject(PLATFORM_ID);
  private rendererFactory = inject(RendererFactory2);
  private renderer = this.rendererFactory.createRenderer(null, null);

  setStyle(style: string, value: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.renderer.setStyle(document.documentElement, style, value);
  }

  setAttribute(name: string, value: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.renderer.setAttribute(document.documentElement, name, value);
  }
}
