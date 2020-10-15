import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilmService } from '../shared/film.service';

import { FilmListComponent } from './film-list.component';

describe('FilmListComponent', () => {
  let component: FilmListComponent;
  let fixture: ComponentFixture<FilmListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmListComponent ],
      providers: [FilmService],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
