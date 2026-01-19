import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ContactModel } from '../models/contact.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export const ContactStatus = {
  IDLE: 'idle',
  SENDING: 'sending',
  SENT: 'sent',
  ERROR: 'error',
} as const;

export type ContactStatus = typeof ContactStatus[keyof typeof ContactStatus];

@Injectable({
  providedIn: 'root',
})
export class ContactStore {
  private destroyRef = inject(DestroyRef);
  private service = inject(ContactService);

  status = signal<ContactStatus>(ContactStatus.IDLE);

  constructor() {
  }

  send(contact: ContactModel) {
    this.status.set(ContactStatus.SENDING);
    this.service
      .send(contact)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          if (data) {
            this.status.set(ContactStatus.SENT);
          } else {
            this.status.set(ContactStatus.ERROR);
          }
        },
        error: () => this.status.set(ContactStatus.ERROR),
      });
  }

}
