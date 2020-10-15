import { TestBed } from '@angular/core/testing';

import { FormCheckGuard } from './form-check.guard';

describe('FormCheckGuard', () => {
  let guard: FormCheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormCheckGuard]
    });
    guard = TestBed.inject(FormCheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
