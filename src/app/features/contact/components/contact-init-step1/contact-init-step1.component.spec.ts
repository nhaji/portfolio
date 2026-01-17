import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInitStep1Component } from './contact-init-step1.component';

describe('ContactInitStep1Component', () => {
  let component: ContactInitStep1Component;
  let fixture: ComponentFixture<ContactInitStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactInitStep1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInitStep1Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
