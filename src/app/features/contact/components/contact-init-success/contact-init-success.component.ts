import { CommonModule } from '@angular/common';
import { Component, model, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ContactModel } from '../../models/contact.model';

@Component({
  selector: 'app-contact-init-success',
  imports: [CommonModule, TranslateModule, ButtonComponent],
  templateUrl: './contact-init-success.component.html',
  styleUrl: './contact-init-success.component.css',
})
export class ContactInitSuccessComponent {

  contact = model.required<ContactModel>();
  next = output<void>();

  onNext() {
    this.next.emit();
  }

}
