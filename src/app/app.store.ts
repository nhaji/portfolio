import { inject, Injectable, resource, signal } from '@angular/core';
import { AppService } from './app-service';
import { firstValueFrom } from 'rxjs';
import { Event, NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CHATBOT_ROUTE } from './features/chatbot/chatbot.routes';

@Injectable({
  providedIn: 'root',
})
export class AppStore {
  private service = inject(AppService);
  private router = inject(Router);

  isChatbotRoute = signal<boolean>(false);

  constructor(){
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if(event.url === `/${CHATBOT_ROUTE}`){
          this.isChatbotRoute.set(true);
        }
        else{
          this.isChatbotRoute.set(false);
        }
      }
    });
  }

  connectRessource = resource({
    loader: () => firstValueFrom(this.service.connect()),
  });
}
