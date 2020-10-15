import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TruncatePipe } from '../../shared/truncate.pipe';

import { FilmItemComponent } from './film-item.component';

describe('FilmItemComponent', () => {
  let component: FilmItemComponent;
  let fixture: ComponentFixture<FilmItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmItemComponent, TruncatePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmItemComponent);
    component = fixture.componentInstance;
    component.film = {
      id: 1,
      titre: '',
      description: '',
      image: '',
      sortie: 123457890123
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
