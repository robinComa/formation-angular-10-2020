import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../shared/film';
import { FilmService } from '../shared/film.service';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.scss']
})
export class FilmFormComponent implements OnInit {

  film: Film;

  constructor(private filmService: FilmService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  submit(): void {
    this.filmService.create(this.film).subscribe(() => {
      this.router.navigate(['films']);
    });
  }

  private initForm(): void {
    this.film = {
      titre: '',
      description: '',
      sortie: null,
      image: ''
    };
  }

}