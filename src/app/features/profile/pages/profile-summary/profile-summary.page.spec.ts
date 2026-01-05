import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSummaryPage } from './profile-summary.page';

describe('ProfileSummaryPage', () => {
  let component: ProfileSummaryPage;
  let fixture: ComponentFixture<ProfileSummaryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSummaryPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSummaryPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
