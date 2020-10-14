import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../shared/film';
import { FilmService } from '../shared/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  films: Film[];

  constructor(private filmService: FilmService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.films = this.activatedRoute.snapshot.data.films;
  }

  delete(film: Film): void {
    this.filmService.delete(film).subscribe(() => {
      this.filmService.findAll().subscribe((films: Film[]) => this.films = films);
    });
  }

}
