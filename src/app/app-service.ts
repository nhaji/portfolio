import { Injectable } from '@angular/core';
import { HttpService } from './core/services/http.service';
import { Observable } from 'rxjs';

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
