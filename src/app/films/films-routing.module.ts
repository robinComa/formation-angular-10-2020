import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmComponent } from './film/film.component';
import { FilmsResolverService } from './shared/films-resolver.service';

const routes: Routes = [{
  path: '',
  component: FilmListComponent,
  resolve: {
    films: FilmsResolverService
  }
}, {
  path: ':id',
  component: FilmComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
