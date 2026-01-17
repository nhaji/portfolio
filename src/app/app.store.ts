import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { AppService } from './app-service';
import { Event, NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CHATBOT_ROUTE } from './features/chatbot/chatbot.routes';

@Injectable({
  providedIn: 'root',
})
export class AppStore {
  readonly connectionStatus = signal<'idle' | 'connecting' | 'connected' | 'error'>('idle');

  private destroyRef = inject(DestroyRef);
  private service = inject(AppService);
  private router = inject(Router);

  isChatbotRoute = signal<boolean>(false);

  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === `/${CHATBOT_ROUTE}`) {
          this.isChatbotRoute.set(true);
        } else {
          this.isChatbotRoute.set(false);
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
