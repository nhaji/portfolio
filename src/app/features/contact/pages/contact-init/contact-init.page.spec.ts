import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInitPage } from './contact-init.page';

describe('ContactInitPage', () => {
  let component: ContactInitPage;
  let fixture: ComponentFixture<ContactInitPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactInitPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInitPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
