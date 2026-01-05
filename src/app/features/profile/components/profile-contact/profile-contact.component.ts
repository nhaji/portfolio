import { Component, input } from '@angular/core';
import { ContactModel } from '../../models/contact.model';
import { ContactType } from '../../models/contact-type.enum';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-profile-contact',
  templateUrl: './profile-contact.component.html',
  styleUrl: './profile-contact.component.css',
  imports: [CommonModule, MatIconModule, MatRippleModule],
})
export class ProfileContactComponent {
  contacts = input.required<ContactModel[]>();

  getIcon(type: ContactType | undefined): string {
    switch (type) {
      case ContactType.EMAIL:
        return 'mail_outline';
      case ContactType.PHONE:
        return 'call';
      case ContactType.LINKEDIN:
        return 'linkedin';
      case ContactType.GITHUB:
        return 'code';
      case ContactType.WEBSITE:
        return 'public';
      case ContactType.LOCATION:
        return 'location_on';
      default:
        return 'help_outline';
    }
  }
}
