import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FilmService } from './film.service';

describe('FilmService', () => {
  let service: FilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
