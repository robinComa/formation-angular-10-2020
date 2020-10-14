import { Injectable } from '@angular/core';
import { Film } from './film';

const FILMS: Film[] = [{
  id: 1,
  titre: 'OSS 117 : Alerte rouge en Afrique noire',
  description: '1981. Hubert Bonisseur de La Bath, alias OSS 117, est de retour. Pour cette nouvelle mission, plus délicate, plus périlleuse et plus torride que jamais, il est contraint de faire équipe avec un jeune collègue, le prometteur OSS 1001.',
  image: 'https://fr.web.img5.acsta.net/pictures/20/09/10/18/05/4458149.jpg',
  sortie: 1234567890123
}, {
  id: 2,
  titre: 'Avatar',
  description: 'Malgré sa paralysie, Jake Sully, un ancien marine immobilisé dans un fauteuil roulant, est resté un combattant au plus profond de son être. Il est recruté pour se rendre à des années-lumière de la Terre, sur Pandora, où de puissants groupes industriels exploitent un minerai rarissime destiné à résoudre la crise énergétique sur Terre. Parce que l\'atmosphère de Pandora est toxique pour les humains, ceux-ci ont créé le Programme Avatar, qui permet à des " pilotes " humains de lier leur esprit à un avatar, un corps biologique commandé à distance, capable de survivre dans cette atmosphère létale. Ces avatars sont des hybrides créés génétiquement en croisant l\'ADN humain avec celui des Na\'vi, les autochtones de Pandora. Sous sa forme d\'avatar, Jake peut de nouveau marcher. On lui confie une mission d\'infiltration auprès des Na\'vi, devenus un obstacle trop conséquent à l\'exploitation du précieux minerai. Mais tout va changer lorsque Neytiri, une très belle Na\'vi, sauve la vie de Jake...',
  image: 'http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/78/95/70/19485155.jpg',
  sortie: 1234567890123
}];

@Injectable()
export class FilmService {

  constructor() { }

  findAll(): Film[] {
    return FILMS;
  }

  get(id: number): Film {
    return FILMS.find((f: Film) => f.id === id);
  }

  create(film: Film): Film {
    return null;
  }

  update(film: Film): void {

  }

  delete(film: Film): void {
    const index = FILMS.findIndex(f => f.id === film.id);
    FILMS.splice(index, 1);
  }
}
