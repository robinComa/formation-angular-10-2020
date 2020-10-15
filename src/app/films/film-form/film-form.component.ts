import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../shared/film';
import { FilmService } from '../shared/film.service';
import { FormCheckGuard } from '../shared/form-check.guard';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.scss']
})
export class FilmFormComponent implements OnInit {

  film: Film;

  constructor(private filmService: FilmService, private router: Router, private formCheckGuard: FormCheckGuard) { }

  ngOnInit(): void {
    this.initForm();
    this.formCheckGuard.setFormComplete(false);
  }

  submit(): void {
    this.filmService.create(this.film).subscribe(() => {
      this.formCheckGuard.setFormComplete(true);
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
