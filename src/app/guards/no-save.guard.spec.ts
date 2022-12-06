import { TestBed } from '@angular/core/testing';

import { NoSaveGuard } from './no-save.guard';

describe('NoSaveGuard', () => {
  let guard: NoSaveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoSaveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
