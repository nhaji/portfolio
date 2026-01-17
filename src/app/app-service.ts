import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpService } from './core/services/http.service';
import { Observable, of } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AppService extends HttpService {
  constructor() {
    super();
  }

  connect(): Observable<void> {
    return this.post<void>(`connection/connect`, {});
  }
}
