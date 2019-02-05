import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.css']
})
export class LettersComponent implements OnInit {

  letters: any = [];

  constructor() {
  }

  ngOnInit() {

      for (let i = 0; i < 25; i++) {
        this.letters.push(
          {
            id: 'slot' + i,
            letter: '',
            img: null,
          }
        );
      }
  }
}
