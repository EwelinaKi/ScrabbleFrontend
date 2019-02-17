import {Component, OnInit} from '@angular/core';
import {BoardService} from '../../services/board.service';
import {GameService} from '../../services/game.service';
import {Letter} from '../letter';
import {IResFromBoard} from '../../shared/interfaces';

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

  players = {
    player1: {pass: false, score: 0},
    player2: {pass: false, score: 0}
  };

  constructor(private gameService: GameService, private boardService: BoardService) {
  }

  ngOnInit() {
    this.addNewMessage('Nowa gra rozpoczęta.', MessageTypes.success);
    this.resetPlayersData();
  }

  checkMove() {
    this.players.player1.pass = false;
    const boardToValidate = this.boardService.getBoard()
      .map(element => {
        return {cellIndex: element.coordinates, letter: element.letter.character};
      })
      .filter(value => value.letter !== null);

    if ((this.boardService.getBoard().filter(el => el.letter.disabled === false)).length === 0) {
      this.addNewMessage(`Dodaj nowe słowo.`, MessageTypes.warning);
      return;
    }

    this.gameService.validateMove({board: boardToValidate})
      .subscribe((res: IResFromBoard) => {
        if (res.roundScore === 0) {
          res.wordsDetails.forEach(el => {
            if (!el.valid) {
              this.addNewMessage(`Słowo ${el.word.toUpperCase()} nie znajduje się w słowniku.`, MessageTypes.default);
            }
            this.boardService.reverseBoard();
          });
        } else {
          res.wordsDetails.forEach(el =>
            this.addNewMessage(`Nowe słowo ${el.word.toUpperCase()} za ${el.points}pkt`, MessageTypes.default)
          );
          this.addNewMessage(`WYNIK RUNDY: ${res.roundScore}pkt`, MessageTypes.success);
          this.players.player1.score = res.totalScore;
          this.boardService.disableLettersOnBoard();
          const quantityOfLettersToDraw = 7 - this.boardService.countLettersOnRack();
          this.gameService.drawLetters(quantityOfLettersToDraw)
            .subscribe(letters => this.boardService.putLettersInRack(letters as string[]),
              err => console.log(err));
        }
      }, err => {
        console.log(err);
      });
  }

  exchangeLetters() {
    // check marked letters if exist
    const lettersToExchange = [];
    const markedElementsInd = Array
      .from(document.getElementsByClassName('marked'))
      .map((el, ind) => {
        lettersToExchange.push(this.boardService.getRack()[ind].letter.character);
        el.classList.remove('marked');
        return parseInt(el.parentElement.id, 10);
      });

    if (lettersToExchange.length === 0) {
      this.addNewMessage(`Nie zaznaczono liter. Kliknij na literę aby ją oznaczyć.`, MessageTypes.warning);
      return;
    }

    // get new letters from backend server
    this.gameService.exchangeLetters(lettersToExchange)
      .subscribe(
        res => {
          markedElementsInd.map(ind => this.boardService.getRack()[ind].letter = new Letter);
          this.boardService.putLettersInRack(res as string[]);
          this.addNewMessage(`Nowe litery: ${res}`, MessageTypes.default);
          this.players.player1.pass = false;
        }, err => {
          this.addNewMessage('Błąd połączenia. Spróbuj ponownie.', MessageTypes.error);
          console.log(err);
        }
      );
  }

  passMove(player: string) {
    if (this.players.player1.pass) {
      this.addNewMessage(`${player} koniec gry.`, MessageTypes.success);
      this.boardService.disableAllLetters();
      this.disableButtons();
      // TODO wyslanie info na server
    } else {
      this.players.player1.pass = true;
      this.addNewMessage(`${player} następny pas zakończy grę.`, MessageTypes.warning);
    }
  }

  private addNewMessage(message: string, messageType: MessageTypes): void {
    const p = document.createElement('p');
    p.className = `${messageType}`;
    p.innerHTML = `${message}`;
    const messageBox = document.getElementById('messageBox');
    messageBox.appendChild(p);
    messageBox.scrollTop = messageBox.scrollHeight;
  }

  private resetPlayersData(): void {
    this.players.player1.score = 0;
    this.players.player2.score = 0;
    this.players.player1.pass = false;
    this.players.player2.pass = false;
  }

  private disableButtons(): void {
    Array.from(document.getElementById('actionButtons').children).forEach(button => {
      button.setAttribute('disabled', 'disabled');
    });
  }
}



