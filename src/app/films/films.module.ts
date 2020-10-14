import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film/film.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmService } from './shared/film.service';
import { FirstWordBoldDirective } from './shared/first-word-bold.directive';
import { TruncatePipe } from './shared/truncate.pipe';
import { FilmItemComponent } from './film-list/film-item/film-item.component';

@NgModule({
  declarations: [FilmComponent, FilmListComponent, FirstWordBoldDirective, TruncatePipe, FilmItemComponent],
  imports: [
    CommonModule
  ],
  exports: [FilmComponent, FilmListComponent],
  providers: [FilmService]
})
export class FilmsModule { }
