import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FilmService } from './film.service';

import { FilmsResolverService } from './films-resolver.service';

describe('FilmsResolverService', () => {
  let service: FilmsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmsResolverService, FilmService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FilmsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
