import {Component, OnInit} from '@angular/core';
import {BoardService} from '../../services/board.service';
import {GameService} from '../../services/game.service';
import {Letter} from '../letter';

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
    const onlyLettersBoard = board.filter(value => value.letter !== null);
    this.gameService.validateMove({board: onlyLettersBoard});
  }

  exchangeLetters() {
    const lettersToExchange = [];
    const markedElementsInd = Array
      .from(document.getElementsByClassName('marked'))
      .map((el, ind) => {
        lettersToExchange.push(this.boardService.getRack()[ind].letter.character);
        el.classList.remove('marked');
        return parseInt(el.parentElement.id);
      });

    this.gameService.exchangeLetters(lettersToExchange)
      .subscribe(
      res => {
        markedElementsInd.map(ind => this.boardService.getRack()[ind].letter = new Letter);
        this.boardService.displayLettersInRack(res);
      }, err => {
        console.log('Could not exchange letters. Try again.');
      }
    );
  }

  passMove() {

  }

}
