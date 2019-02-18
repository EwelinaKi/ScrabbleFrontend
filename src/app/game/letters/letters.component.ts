import {Component, OnInit} from '@angular/core';

import {GameService} from '../../services/game.service';
import {BoardService} from '../../services/board.service';
import {ILetters} from '../../shared/interfaces';

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
    this.gameService.drawSetOfLetters()
      .subscribe((res: ILetters) => {
        console.log(res.letters);
        this.boardService.putLettersInRack(res.letters);
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
}
