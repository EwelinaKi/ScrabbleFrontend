import {Component, OnInit} from '@angular/core';
import {BoardService} from '../../services/board.service';
import {GameService} from '../../services/game.service';
import {Letter} from '../letter';


enum MessageTypes {
  error = 'text-danger',
  warning = 'text-warning',
  success = 'text-success',
  default = 'text-light'
}

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  passCounter: object = {
   // '' player1'' = false,
   //  player2 = false
  };

  constructor(private gameService: GameService, private boardService: BoardService) {
  }

  ngOnInit() {
    this.addNewMessage('Nowa gra rozpoczęta.', MessageTypes.warning);
    // this.passCounter.player1 = false;
    // this.passCounter.player2 = false;
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
          this.addNewMessage(`Nowe litery: ${res}`, MessageTypes.default);
        }, err => {
          this.addNewMessage('Błąd połączenia. Spróbuj ponownie.', MessageTypes.error);
        }
      );
  }

  passMove() {

  }

  addNewMessage(message: string, messageType: MessageTypes) {
    const p = document.createElement('p');
    p.className = `${messageType}`;
    p.innerHTML = `${message}`;
    const messageBox = document.getElementById('messageBox');
    messageBox.appendChild(p);
    messageBox.scrollTop = messageBox.scrollHeight;

  }

}
