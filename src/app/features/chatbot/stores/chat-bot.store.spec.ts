import { TestBed } from '@angular/core/testing';

import { ChatBotStore } from './chat-bot.store';

describe('ChatBotStore', () => {
  let service: ChatBotStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatBotStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
