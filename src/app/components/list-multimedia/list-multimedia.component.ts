import { Component, Input, OnInit } from '@angular/core';
import { Multimedia } from 'src/app/models/multimedia';

@Component({
  selector: 'app-list-multimedia',
  templateUrl: './list-multimedia.component.html',
  styleUrls: ['./list-multimedia.component.scss']
})
export class ListMultimediaComponent implements OnInit {

  @Input() multimedias:Multimedia[] = [new Multimedia([])];
  constructor() { }

  ngOnInit(): void {
  }

}
