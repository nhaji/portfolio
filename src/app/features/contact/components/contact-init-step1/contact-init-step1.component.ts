import { Component, inject, model, output } from '@angular/core';
import { ContactModel } from '../../models/contact.model';
import { email, Field, form, required } from '@angular/forms/signals';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DirectionService } from '../../../../core/services/direction.service';

@Component({
  selector: 'app-contact-init-step1',
  imports: [CommonModule, TranslateModule, Field, InputComponent, ButtonComponent],
  templateUrl: './contact-init-step1.component.html',
  styleUrl: './contact-init-step1.component.css',
})
export class ContactInitStep1Component {
  private snackBar = inject(MatSnackBar);
  private translate = inject(TranslateService);
  private dir = inject(DirectionService);

  contact = model.required<ContactModel>();
  next = output<void>();
  skip = output<void>();
  isRtl = this.dir.isRtl;

  contactForm = form(this.contact, (schemaPath) => {
    required(schemaPath.email);
    email(schemaPath.email);
  });

  onNext() {
    if (this.contactForm().invalid()) {
      this.contactForm.email().markAsTouched()
      this.snackBar.open(this.translate.instant('CONTACT.EMAIL_ERROR'), this.translate.instant('COMMON.CLOSE'), {
        duration: 5000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: ['error-snackbar'],
      });
    }
    else{
      this.next.emit();
    }
  }

  onSkip(){
    this.skip.emit();
  }
}
