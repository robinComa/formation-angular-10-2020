import { Component, OnInit } from '@angular/core';
import { Film } from '../shared/film';
import { FilmService } from '../shared/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  films: Film[];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.films = this.filmService.findAll();
  }

  delete(film: Film): void {
    this.filmService.delete(film);
    this.films = this.filmService.findAll();
  }

}
