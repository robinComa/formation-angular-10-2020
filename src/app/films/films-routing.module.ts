import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmFormComponent } from './film-form/film-form.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmComponent } from './film/film.component';
import { FilmsResolverService } from './shared/films-resolver.service';
import { FormCheckGuard } from './shared/form-check.guard';

const routes: Routes = [{
  path: '',
  component: FilmListComponent,
  resolve: {
    films: FilmsResolverService
  }
}, {
  path: 'form',
  component: FilmFormComponent,
  canDeactivate: [FormCheckGuard]
}, {
  path: ':id',
  component: FilmComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
