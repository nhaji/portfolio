import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInitStep3Component } from './contact-init-step3.component';

describe('ContactInitStep3Component', () => {
  let component: ContactInitStep3Component;
  let fixture: ComponentFixture<ContactInitStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactInitStep3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInitStep3Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
