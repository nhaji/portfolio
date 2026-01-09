import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotMessageComponent } from './chatbot-message.component';

describe('ChatbotMessageComponent', () => {
  let component: ChatbotMessageComponent;
  let fixture: ComponentFixture<ChatbotMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotMessageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
