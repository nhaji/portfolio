import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotFabComponent } from './chatbot-fab.component';

describe('ChatbotFabComponent', () => {
  let component: ChatbotFabComponent;
  let fixture: ComponentFixture<ChatbotFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotFabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotFabComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
