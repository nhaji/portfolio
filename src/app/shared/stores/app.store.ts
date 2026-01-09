import { inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Event, NavigationEnd, Router } from '@angular/router';
import { CHATBOT_ROUTE } from '../../features/chatbot/chatbot.routes';

@Injectable({
  providedIn: 'root',
})
export class AppStore {

  isChatbotRoute = signal<boolean>(false);

  private router = inject(Router);

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
  
}
