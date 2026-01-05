import { TestBed } from '@angular/core/testing';

import { PreventService } from './prevent.service';

describe('PreventService', () => {
  let service: PreventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
