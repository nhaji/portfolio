import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ContactInitStep1Component } from '../../components/contact-init-step1/contact-init-step1.component';
import { ContactInitStep2Component } from '../../components/contact-init-step2/contact-init-step2.component';
import { ContactInitStep3Component } from '../../components/contact-init-step3/contact-init-step3.component';
import { ContactModel } from '../../models/contact.model';
import { ProgressIndicatorComponent } from '../../../../shared/components/progress-indicator/progress-indicator.component';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CHATBOT_ROUTE } from '../../../chatbot/chatbot.routes';
import { DirectionService } from '../../../../core/services/direction.service';

@Component({
  selector: 'app-contact-init',
  imports: [
    CommonModule,
    ProgressIndicatorComponent,
    ContactInitStep1Component,
    ContactInitStep2Component,
    ContactInitStep3Component,
    MatIconModule,
  ],
  templateUrl: './contact-init.page.html',
  styleUrl: './contact-init.page.css',
})
export class ContactInitPage {

  private router = inject(Router);
  private dir = inject(DirectionService);
  
  currentStep = signal<number>(1);
  contactModel = signal<ContactModel>({ email: '', phone: '', fullName: '', message: '' });
  isRtl = this.dir.isRtl;


  stepTitle = computed(() => {
    switch (this.currentStep()) {
      case 1:
        return 'Your Email';
      case 2:
        return 'Profile Details';
      case 3:
        return 'Your Message';
      default:
        return '';
    }
  });

  prev() {
    if (this.currentStep() > 1) {
      this.currentStep.update((s) => s - 1);
    } else {
      this.router.navigate([CHATBOT_ROUTE]);
    }
  }

  next() {
    if (this.currentStep() < 3) {
      this.currentStep.update((s) => s + 1);
    }
  }
}
