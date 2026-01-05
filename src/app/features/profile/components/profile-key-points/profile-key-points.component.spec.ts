import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileKeyPointsComponent } from './profile-key-points.component';

describe('ProfileKeyPointsComponent', () => {
  let component: ProfileKeyPointsComponent;
  let fixture: ComponentFixture<ProfileKeyPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileKeyPointsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileKeyPointsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
