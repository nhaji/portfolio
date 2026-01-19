import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInitSuccessComponent } from './contact-init-success.component';

describe('ContactInitSuccessComponent', () => {
  let component: ContactInitSuccessComponent;
  let fixture: ComponentFixture<ContactInitSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactInitSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInitSuccessComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
