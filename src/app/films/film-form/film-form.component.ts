import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../shared/film';
import { FilmService } from '../shared/film.service';
import { FormCheckGuard } from '../shared/form-check.guard';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.scss']
})
export class FilmFormComponent implements OnInit {

  filmForm: FormGroup;

  constructor(
    private filmService: FilmService,
    private router: Router,
    private formCheckGuard: FormCheckGuard,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm();
    const id = +this.activatedRoute.snapshot.params.id;
    if (id) {
      this.filmService.get(id).subscribe((film: Film) => this.initForm(film));
    }
  }

  submit(): void {
    const film: Film = this.filmForm.value;
    if (this.isUpdate()) {
      this.filmService.update(film).subscribe(() => {
        this.formCheckGuard.setFormComplete(true);
        this.router.navigate(['films', film.id]);
      });
    } else {
      this.filmService.create(film).subscribe((newFilm: Film) => {
        this.formCheckGuard.setFormComplete(true);
        this.router.navigate(['films', newFilm.id]);
      });
    }
  }

  private isUpdate(): boolean {
    return !!this.filmForm.value.id;
  }

  private initForm(film: Film = {
    titre: '',
    description: '',
    sortie: null,
    image: ''
  }): void {
    this.formCheckGuard.setFormComplete(false);
    this.filmForm = new FormGroup({
      id: new FormControl(film.id),
      titre: new FormControl(film.titre, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      description: new FormControl(film.description, [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]),
      sortie: new FormControl(film.sortie, [Validators.required]),
      image: new FormControl(film.image, [Validators.required])
    });
  }

}
