import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotProogresssBarComponent } from './chatbot-proogresss-bar.component';

describe('ChatbotProogresssBarComponent', () => {
  let component: ChatbotProogresssBarComponent;
  let fixture: ComponentFixture<ChatbotProogresssBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotProogresssBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotProogresssBarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
