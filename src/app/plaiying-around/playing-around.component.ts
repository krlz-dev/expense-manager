import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-playing-around',
  template: `
    <ng-container>
      <h1>{{ hola }}</h1>
      <p>Some content here</p>
    </ng-container>
  `
})
export class PlayingAroundComponent implements OnInit {
  hola: string;

  constructor() {
  }

  ngOnInit() {
    this.hola = 'Bola mundo';
  }

}
