import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInitStep2Component } from './contact-init-step2.component';

describe('ContactInitStep2Component', () => {
  let component: ContactInitStep2Component;
  let fixture: ComponentFixture<ContactInitStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactInitStep2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInitStep2Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
