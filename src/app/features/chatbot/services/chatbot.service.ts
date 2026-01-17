import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { Observable } from 'rxjs';
import { SessionStatusModel } from '../models/session-status.model';
import { MessageDetailModel } from '../models/message-detail.model ';
import { MessageModel } from '../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService extends HttpService {
  constructor() {
    super();   
  }

  init(): Observable<SessionStatusModel> {
    return this.post<SessionStatusModel>(`ai-session/init`, {});
  }

  send(message: MessageModel): Observable<MessageDetailModel> {
    return this.post<MessageDetailModel>(`ai-message`, message);
  }
}
