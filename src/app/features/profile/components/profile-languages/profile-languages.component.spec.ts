import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLanguagesComponent } from './profile-languages.component';

describe('ProfileLanguagesComponent', () => {
  let component: ProfileLanguagesComponent;
  let fixture: ComponentFixture<ProfileLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileLanguagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileLanguagesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
