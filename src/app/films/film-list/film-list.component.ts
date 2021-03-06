import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Film } from '../shared/film';
import { FilmService } from '../shared/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  films: Film[];

  constructor(
    private filmService: FilmService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.films = this.activatedRoute.snapshot.data.films;
  }

  delete(film: Film): void {
    this.filmService.delete(film).subscribe(() => {
      this.snackBar.open(this.translateService.instant('films.delete.message', film), null, {
        duration: 2000,
      });
      this.filmService.findAll().subscribe((films: Film[]) => this.films = films);
    });
  }

}
