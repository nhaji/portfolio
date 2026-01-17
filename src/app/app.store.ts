import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { AppService } from './app-service';
import { Event, NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CHATBOT_ROUTE } from './features/chatbot/chatbot.routes';
import { PROFILE_ROUTE } from './features/profile/profile.routes';

@Injectable({
  providedIn: 'root',
})
export class AppStore {
  readonly connectionStatus = signal<'idle' | 'connecting' | 'connected' | 'error'>('idle');

  private destroyRef = inject(DestroyRef);
  private service = inject(AppService);
  private router = inject(Router);

  showOptions = signal<boolean>(false);

  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.startsWith(`/${PROFILE_ROUTE}`)) {
          this.showOptions.set(true);
        } else {
          this.showOptions.set(false);
        }
      }
    });
  }

  connect() {
    this.connectionStatus.set('connecting');
    this.service
      .connect()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => this.connectionStatus.set('connected'),
        error: () => this.connectionStatus.set('error'),
      });
  }
}
