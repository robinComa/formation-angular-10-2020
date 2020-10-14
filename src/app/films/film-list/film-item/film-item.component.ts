import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from '../../shared/film';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {

  @Input() film: Film;
  @Output() deleteEvent = new EventEmitter<Film>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(): void {
    this.deleteEvent.emit(this.film);
  }

}
