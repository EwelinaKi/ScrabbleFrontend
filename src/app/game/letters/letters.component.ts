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
        this.boardService.displayLettersInRack(letters);
      });
  }

  drop(event: DragEvent) {
    this.boardService.drop(event);
  }
}
