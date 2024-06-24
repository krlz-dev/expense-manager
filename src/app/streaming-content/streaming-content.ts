import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-streaming-content',
  template: `<h1>Some more content</h1>`
})
export class StreamingContentComponent implements OnInit {
  someStuff: string;
  numbers = of(1, 2, 3, 4, 5, 6);
  doubleNumbers = this.numbers.pipe(
    map(x => x * 2)
  );

  constructor() {
  }

  ngOnInit() {
    this.doubleNumbers.forEach(x => console.log(x));
    this.someStuff = 'Congrats till';
  }
}
