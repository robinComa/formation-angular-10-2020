import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Film } from '../shared/film';
import { FilmService } from '../shared/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit, OnDestroy {

  film: Film;

  private activatedRouteSubscription: Subscription;

  constructor(private filmService: FilmService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouteSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      const id = +params.id;
      this.filmService.get(id).subscribe((film: Film) => this.film = film)
    });
  }

  ngOnDestroy(): void {
    this.activatedRouteSubscription.unsubscribe();
  }

}
