import { Component, OnInit } from '@angular/core';
import { Actualite } from 'src/app/models/actualite';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss']
})
export class ActualiteComponent implements OnInit {

  actualite:Actualite = new Actualite(
    "Baldur's Gate III présente le contenu du Patch 4",
    new Date(),
    "https://www.jeuxvideo.com/news/1365297/baldur-s-gate-iii-presente-le-contenu-du-patch-4.htm",
    "Il y a peu de temps, Larian Studio annonçait la diffusion prochaine d'un nouveau panel, dédié à la prochaine mise à jour majeure de Baldur's Gate III. Cette diffusion vient d'avoir lieu, et on en sait beaucoup plus.");
  constructor() { }

  ngOnInit(): void {
  }

}
