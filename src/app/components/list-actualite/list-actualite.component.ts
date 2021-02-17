import { Component, OnInit } from '@angular/core';
import { Actualite } from 'src/app/models/actualite';
import { Article } from 'src/app/models/article';
import { Multimedia } from 'src/app/models/multimedia';

@Component({
  selector: 'app-list-actualite',
  templateUrl: './list-actualite.component.html',
  styleUrls: ['./list-actualite.component.scss']
})
export class ListActualiteComponent implements OnInit {
  article1:Article = new Article( 
    "Baldur's Gate III présente le contenu du Patch 4",
    new Date(),
    "https://www.jeuxvideo.com/news/1365297/baldur-s-gate-iii-presente-le-contenu-du-patch-4.htm",
    "Il y a peu de temps, Larian Studio annonçait la diffusion prochaine d'un nouveau panel, dédié à la prochaine mise à jour majeure de Baldur's Gate III. Cette diffusion vient d'avoir lieu, et on en sait beaucoup plus."
     +"Premièrement, Larian a présenté la classe du druide, que nous avons détaillé dans un article dédié. Par la suite, les développeurs ont présenté plus en détail le Patch 4, intitulé Nature's Power, en commençant par dévoiler une modification des lancers. A l'avenir, les joueurs ne devraient plus être trop chanceux ou trop malchanceux grâce à un lissage de la courbe de probabilité. Le système sera divisé en deux, pour s\'adapter aux combats et aux dialogues, et ne s\'appliquera pas aux jets de dégâts.");

  multimedia1:Multimedia = new Multimedia([
    "https://image.jeuxvideo.com/medias-sm/161359/1613590805-1270-capture-d-ecran.png"
  ]);
  article2:Article = new Article( 
    "Valheim, craft, : guide et liste des recettes",
    new Date(),
    "https://www.jeuxvideo.com/news/1364553/valheim-craft-guide-et-liste-des-recettes.htm",
    "Dans Valheim, le craft est un élément clé de l'aventure. Vous permettant de vous créer des équipements offensifs ou défensifs ou tout simplement de vous reposer, crafter sera essentiel afin de survivre, c'est pourquoi nous vous proposons un guide pour maitriser le crafting dans Valheim. Au coeur du gameplay de Valheim, dispo en exclusivité sur PC, vous êtes lâché dans une gigantesque sandbox et devez lutter pour survivre dans un environnement hostile. Pour notre guide complet, nous vous avons préparé un guide avec toutes les informations nécessaires pour crafter et quelques recettes que vous pourrez expérimenter.");

  multimedia2:Multimedia = new Multimedia([
    "https://image.jeuxvideo.com/medias-md/161358/1613584063-3814-capture-d-ecran.jpg"
  ]);

  actualites:Actualite[] = [ 
    new Actualite(this.article1, this.multimedia1),
    new Actualite(this.article2, this.multimedia2)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
