import { TestBed } from '@angular/core/testing';

import { RootGuard } from './root.guard';

describe('RootGuard', () => {
  let service: RootGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RootGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
