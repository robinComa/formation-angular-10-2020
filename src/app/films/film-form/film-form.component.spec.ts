import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatNativeDateModule } from '@angular/material/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FilmService } from '../shared/film.service';
import { FormCheckGuard } from '../shared/form-check.guard';

import { FilmFormComponent } from './film-form.component';

describe('FilmFormComponent', () => {
  let component: FilmFormComponent;
  let fixture: ComponentFixture<FilmFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [FilmService, FormCheckGuard],
      declarations: [ FilmFormComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MaterialModule,
        MatNativeDateModule,
        NoopAnimationsModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
