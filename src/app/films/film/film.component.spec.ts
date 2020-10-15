import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilmService } from '../shared/film.service';

import { FilmComponent } from './film.component';

describe('FilmComponent', () => {
  let component: FilmComponent;
  let fixture: ComponentFixture<FilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmComponent ],
      providers: [FilmService],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
