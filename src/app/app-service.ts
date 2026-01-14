import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpService } from './core/services/http.service';
import { Observable, of } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AppService  extends HttpService { 

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    super();
  }

  connect(): Observable<void> {
    if (isPlatformBrowser(this.platformId)) {
      return this.post<void>(`connection/connect`, {});
    }
    return of();
  }

}