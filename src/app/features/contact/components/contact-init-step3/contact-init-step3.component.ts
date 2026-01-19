import { Component, input, model, output } from '@angular/core';
import { ContactModel } from '../../models/contact.model';
import { Field, form } from '@angular/forms/signals';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';

@Component({
  selector: 'app-contact-init-step3',
  imports: [
    CommonModule,
    TranslateModule,
    Field,
    InputComponent,
    ButtonComponent,
    LoaderComponent
  ],
  templateUrl: './contact-init-step3.component.html',
  styleUrl: './contact-init-step3.component.css',
})
export class ContactInitStep3Component {
  contact = model.required<ContactModel>();
  contactForm = form(this.contact);
  sending = input<boolean>(false);
  next = output<void>();

  onNext() {
    this.next.emit();
  }
}
