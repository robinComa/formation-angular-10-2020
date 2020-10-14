import { TestBed } from '@angular/core/testing';

import { HttpTimeInterceptor } from './http-time.interceptor';

describe('HttpTimeInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpTimeInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpTimeInterceptor = TestBed.inject(HttpTimeInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
