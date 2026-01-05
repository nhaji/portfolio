import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreventService {
  private platformId = inject(PLATFORM_ID);

  enable() {
    if (isPlatformBrowser(this.platformId)) {
      document.addEventListener('contextmenu', (event) => event.preventDefault());
      document.addEventListener('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key === 'c') {
          event.preventDefault();
        }
      });
    }
  }
}
