import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmListComponent } from './films/film-list/film-list.component';
import { FilmComponent } from './films/film/film.component';

const routes: Routes = [{
  path: 'films',
  component: FilmListComponent
}, {
  path: 'films/:id',
  component: FilmComponent
}, {
  path: '**',
  redirectTo: 'films'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
