import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film/film.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmService } from './shared/film.service';
import { FirstWordBoldDirective } from './shared/first-word-bold.directive';

@NgModule({
  declarations: [FilmComponent, FilmListComponent, FirstWordBoldDirective],
  imports: [
    CommonModule
  ],
  exports: [FilmComponent, FilmListComponent],
  providers: [FilmService]
})
export class FilmsModule { }
