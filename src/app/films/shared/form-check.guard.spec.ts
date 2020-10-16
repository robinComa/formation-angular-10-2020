import { TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { FormCheckGuard } from './form-check.guard';

describe('FormCheckGuard', () => {
  let guard: FormCheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormCheckGuard],
      imports: [MaterialModule]
    });
    guard = TestBed.inject(FormCheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
