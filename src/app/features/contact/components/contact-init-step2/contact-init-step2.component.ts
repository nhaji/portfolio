import { Component, inject, model, output, Signal } from '@angular/core';
import { ContactModel } from '../../models/contact.model';
import { Field, form } from '@angular/forms/signals';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { DirectionService } from '../../../../core/services/direction.service';

@Component({
  selector: 'app-contact-init-step2',
  imports: [CommonModule, TranslateModule, Field, InputComponent, ButtonComponent],
  templateUrl: './contact-init-step2.component.html',
  styleUrl: './contact-init-step2.component.css',
})
export class ContactInitStep2Component {
  private dir = inject(DirectionService);

  contact = model.required<ContactModel>();
  contactForm = form(this.contact);
  next = output<void>();
  isRtl: Signal<boolean> = this.dir.isRtl;

  onNext() {
    this.next.emit();
  }
}
