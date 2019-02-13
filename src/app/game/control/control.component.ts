import {Component, OnInit} from '@angular/core';
import {BoardService} from '../../services/board.service';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor(private gameService: GameService, private boardService: BoardService) {
  }

  ngOnInit() {
  }

  checkMove() {
    const board = this.boardService.getBoard().map(element => {
        return {cellIndex: element.coordinates, letter: element.letter.character};
    });
    const onlyLettersBoard = board.filter( value => value.letter !== null);
    this.gameService.validateMove({board: onlyLettersBoard});
  }

  exchangeLetters() {

  }

  passMove() {

  }

}
