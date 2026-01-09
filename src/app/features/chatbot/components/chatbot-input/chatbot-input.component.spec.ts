import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotInputComponent } from './chatbot-input.component';

describe('ChatbotInputComponent', () => {
  let component: ChatbotInputComponent;
  let fixture: ComponentFixture<ChatbotInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotInputComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
