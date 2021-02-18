import { Component, Input, OnInit } from '@angular/core';
import { Multimedia } from 'src/app/models/multimedia';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.scss']
})
export class MultimediaComponent implements OnInit {

  @Input() multimedia:Multimedia = new Multimedia([]);
  constructor() { }

  ngOnInit(): void {
  }

}
