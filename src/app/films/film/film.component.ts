import { Component, OnInit } from '@angular/core';
import { Film } from '../shared/film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  film: Film;

  constructor() { }

  ngOnInit(): void {
    this.film = {
      titre: 'OSS 117 : Alerte rouge en Afrique noire',
      description: '1981. Hubert Bonisseur de La Bath, alias OSS 117, est de retour. Pour cette nouvelle mission, plus délicate, plus périlleuse et plus torride que jamais, il est contraint de faire équipe avec un jeune collègue, le prometteur OSS 1001.',
      image: 'https://fr.web.img5.acsta.net/pictures/20/09/10/18/05/4458149.jpg'
    };
  }

}
