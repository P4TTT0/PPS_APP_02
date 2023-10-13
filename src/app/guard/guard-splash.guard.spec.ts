import { TestBed } from '@angular/core/testing';

import { GuardSplashGuard } from './guard-splash.guard';

describe('GuardSplashGuard', () => {
  let guard: GuardSplashGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardSplashGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
