import { Component, Input, OnInit } from '@angular/core';
import { Actualite } from 'src/app/models/actualite';
import { Article } from 'src/app/models/article';
import { Multimedia } from 'src/app/models/multimedia';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss']
})
export class ActualiteComponent implements OnInit {
  @Input() actualite:Actualite = new Actualite(new Article("test",new Date(), "",""), new Multimedia([]));
    constructor() { }

  ngOnInit(): void {
  }

}
