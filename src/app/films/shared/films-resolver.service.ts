import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Film } from './film';
import { FilmService } from './film.service';

@Injectable()
export class FilmsResolverService implements Resolve<Film[]> {

  constructor(private filmService: FilmService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Film[]> {
    return this.filmService.findAll();
  }
}
