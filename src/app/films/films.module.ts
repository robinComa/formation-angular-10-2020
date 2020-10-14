import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FilmComponent } from './film/film.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmService } from './shared/film.service';
import { FirstWordBoldDirective } from './shared/first-word-bold.directive';
import { TruncatePipe } from './shared/truncate.pipe';
import { FilmItemComponent } from './film-list/film-item/film-item.component';
import { HttpTimeInterceptor } from './shared/http-time.interceptor';

@NgModule({
  declarations: [FilmComponent, FilmListComponent, FirstWordBoldDirective, TruncatePipe, FilmItemComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [FilmComponent, FilmListComponent],
  providers: [
    FilmService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTimeInterceptor,
      multi: true
    }]
})
export class FilmsModule { }
