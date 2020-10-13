import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film/film.component';
import { FilmListComponent } from './film-list/film-list.component';

@NgModule({
  declarations: [FilmComponent, FilmListComponent],
  imports: [
    CommonModule
  ],
  exports: [FilmComponent, FilmListComponent]
})
export class FilmsModule { }
