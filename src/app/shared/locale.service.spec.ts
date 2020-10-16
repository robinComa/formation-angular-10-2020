import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { LocaleService } from './locale.service';

describe('LocaleService', () => {
  let service: LocaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocaleService],
      imports: [TranslateModule.forRoot()]
    });
    service = TestBed.inject(LocaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
