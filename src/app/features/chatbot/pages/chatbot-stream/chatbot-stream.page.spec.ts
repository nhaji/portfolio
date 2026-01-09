import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotStreamPage } from './chatbot-stream.page';

describe('ChatbotStreamPage', () => {
  let component: ChatbotStreamPage;
  let fixture: ComponentFixture<ChatbotStreamPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotStreamPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotStreamPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
