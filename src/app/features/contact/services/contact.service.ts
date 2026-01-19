import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { Observable } from 'rxjs';
import { ContactModel } from '../models/contact.model';
import { ContactDetailModel } from '../models/contact-detail.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService extends HttpService {
  constructor() {
    super();
  }

  send(contact: ContactModel): Observable<ContactDetailModel> {
    const request = {
      aiGuestId: contact.aiGuestId,
      message: contact.message,
      guest: {
        fullName: contact.fullName,
        email: contact.email,
        phone: contact.phone
      }
    }
    return this.post<ContactDetailModel>(`request`, request);
  }
}