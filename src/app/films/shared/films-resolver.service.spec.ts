import { TestBed } from '@angular/core/testing';

import { FilmsResolverService } from './films-resolver.service';

describe('FilmsResolverService', () => {
  let service: FilmsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
