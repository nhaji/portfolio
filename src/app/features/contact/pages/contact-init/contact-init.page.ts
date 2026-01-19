import { CommonModule } from '@angular/common';
import { AfterContentChecked, Component, computed, inject, OnChanges, OnInit, Signal, signal } from '@angular/core';
import { ContactInitStep1Component } from '../../components/contact-init-step1/contact-init-step1.component';
import { ContactInitStep2Component } from '../../components/contact-init-step2/contact-init-step2.component';
import { ContactInitStep3Component } from '../../components/contact-init-step3/contact-init-step3.component';
import { ContactModel } from '../../models/contact.model';
import { ProgressIndicatorComponent } from '../../../../shared/components/progress-indicator/progress-indicator.component';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { DirectionService } from '../../../../core/services/direction.service';
import { PROFILE_ROUTE } from '../../../profile/profile.routes';
import { ContactStatus, ContactStore } from '../../stores/contact.store';
import { ContactInitSuccessComponent } from '../../components/contact-init-success/contact-init-success.component';

@Component({
  selector: 'app-contact-init',
  imports: [
    CommonModule,
    MatIconModule,
    ProgressIndicatorComponent,
    ContactInitStep1Component,
    ContactInitStep2Component,
    ContactInitStep3Component,
    ContactInitSuccessComponent
  ],
  templateUrl: './contact-init.page.html',
  styleUrl: './contact-init.page.css',
})
export class ContactInitPage implements OnInit{
  private router = inject(Router);
  private dir = inject(DirectionService);
  store = inject(ContactStore);

  currentStep = signal<number>(1);
  contactModel = signal<ContactModel>({ email: '', phone: '', fullName: '', message: '' });
  isRtl : Signal<boolean> = this.dir.isRtl;
  isSending : Signal<boolean> = computed(() => this.store.status() === ContactStatus.SENDING);
  isSent : Signal<boolean> = computed(() => this.store.status() === ContactStatus.SENT);

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

  ngOnInit(){
    this.store.status.set(ContactStatus.IDLE);
  }

  prev() {
    if (this.currentStep() > 1) {
      this.currentStep.update((s) => s - 1);
    } else {
      this.router.navigate([PROFILE_ROUTE]);
    }
  }

  skip() {
    this.router.navigate([PROFILE_ROUTE]);
  }

  next() {
    if(this.isSent()) {
      this.router.navigate([PROFILE_ROUTE]);
      return;
    }
    if (this.currentStep() < 3) {
      this.currentStep.update((s) => s + 1);
      return;
    }
    else if(this.currentStep() === 3){
      this.store.send(this.contactModel());
      return;
    }
  }
}
