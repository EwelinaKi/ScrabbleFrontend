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

        // TODO JAAAAAREK!!!! HEEELP
        console.log(typeof letters);
        console.log(letters);
        console.log(typeof [1, 2, 3, 4, 5]);
        console.log(['a', 'b', 'c']);
        this.boardService.displayLettersInRack(letters);
        // this.boardService.displayLettersInRack(['a', 'b', 'c']);
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
