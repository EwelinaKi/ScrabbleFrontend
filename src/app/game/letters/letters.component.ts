import {Component, OnInit} from '@angular/core';

import {GameService} from '../../services/game.service';
import {BoardService} from '../../services/board.service';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.css']
})
export class LettersComponent implements OnInit {

  constructor(private gameService: GameService, private boardService: BoardService) {
  }

  ngOnInit() {
    this.boardService.prepareRack();
    this.gameService.drawLetters()
      .subscribe((letters) => {
        if (this.isStringArray(letters)) {
          this.boardService.putLettersInRack(<string[]>letters);
        } else {
          throw new Error('Got crap');
        }
      });
  }

  drop(event: DragEvent) {
    this.boardService.drop(event);
  }

  markLetter(event) {
    const targetId = event.target.parentElement.id;
    const targetImg = document.getElementById(targetId).children[0];
    if (targetImg.classList.contains('marked')) {
      targetImg.classList.remove('marked');
    } else {
      targetImg.classList.add('marked');
    }
  }

  // TODO wywalic do innego modułu + to samo w control comp: exchangeLetters
  private isStringArray(letters) {
    return Array.isArray(letters) && letters.every(it => typeof it === 'string');
  }
}
