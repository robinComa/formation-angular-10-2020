import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film } from './film';

@Injectable()
export class FilmService {

  private endpoint = `${environment.api}/films`;

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(this.endpoint);
  }

  get(id: number): Observable<Film> {
    return this.httpClient.get<Film>(`${this.endpoint}/${id}`);
  }

  create(film: Film): Observable<Film> {
    return this.httpClient.post<Film>(this.endpoint, film);
  }

  update(film: Film): Observable<void> {
    return this.httpClient.put<void>(`${this.endpoint}/${film.id}`, film);
  }

  delete(film: Film): Observable<void> {
    return this.httpClient.delete<void>(`${this.endpoint}/${film.id}`);
  }
}
