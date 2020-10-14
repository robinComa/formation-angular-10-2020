import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsModule } from './films/films.module';

const routes: Routes = [{
  path: 'films',
  loadChildren: () => FilmsModule
}, {
  path: '**',
  redirectTo: 'films'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
