import {Component, OnInit} from '@angular/core';
import {BoardService} from '../../services/board.service';
import {GameService} from '../../services/game.service';
import {ILetter, ILetters, IResFromBoard, IWordsDetail} from '../../shared/interfaces';
import {Letter} from '../letter';
import {addNewDefaultMessage, addNewErrorMessage, addNewSuccessMessage, addNewWarningMessage} from './control.message.provider';
import {environment} from '../../../environments/environment';
import {Slot} from '../slot';
import {PlayerService} from '../../services/player.service';

enum Messages {
  connectionFailed = 'Błąd połączenia. Spróbuj ponownie.',
  unmarkedLetters = 'Nie zaznaczono liter. Kliknij na literę aby ją oznaczyć.',
  absentWord = 'Dodaj nowe słowo.',
  gameStart = 'Nowa gra rozpoczęta.',
  gameOver = 'Koniec gry',
  passed = 'Następny pas zakończy grę.'
}

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})

export class ControlComponent implements OnInit {

  passNonNullLetters = (value: ILetter): boolean => value.letter !== null;
  passActiveLetters = (element: Slot): boolean => !element.letter.disabled;

  constructor(
    private gameService: GameService,
    private boardService: BoardService,
    private players: PlayerService,
  ) {
  }

  ngOnInit() {
  }

  checkMove() {
    if (this.playerHasNotMakeMove()) {
      addNewWarningMessage(Messages.absentWord);
      return;
    }

    this.players.revive('player1');

    const lettersToValidate = this.boardService.getBoard()
      .map(element => ({cellIndex: element.coordinates, letter: element.letter.character}))
      .filter(this.passNonNullLetters);

    this.gameService.validateMove({board: lettersToValidate})
      .subscribe((res: IResFromBoard) => {
        if (res.roundScore === 0) {
          this.handleBadMove(res.wordsDetails);
        } else {
          this.handleGoodMove(res);
        }
      }, err => {
        console.log(err);
        addNewErrorMessage(Messages.connectionFailed);
      });
  }

  exchangeLetters() {
    const {lettersToExchange, markedElementsInd} = this.checkMarkedLettersIfExist();
    if (lettersToExchange.length === 0) {
      addNewWarningMessage(Messages.unmarkedLetters);
      return;
    }
    this.getNewLettersFromBackendServer(lettersToExchange, markedElementsInd);
  }

  passMove() {
    if (this.players.checkPassedState('player1')) {
      addNewSuccessMessage(Messages.gameOver);
      this.boardService.disableAllLetters();
      this.players.stopOngoingGame();
      // TODO wyslanie info na server
    } else {
      this.players.pass('player1');
      addNewWarningMessage(Messages.passed);
    }
  }

  private playerHasNotMakeMove() {
    return this.boardService.getBoard().filter(this.passActiveLetters).length === 0;
  }

  private getNewLettersFromBackendServer(lettersToExchange, markedElementsInd): void {
    this.gameService.exchangeLetters(lettersToExchange)
      .subscribe(
        (res: ILetters) => {
          this.setNewLettersInPlace(markedElementsInd, res);
        }, err => {
          addNewErrorMessage(Messages.connectionFailed);
          console.log(err);
        }
      );
  }

  private checkMarkedLettersIfExist() {
    const markedHtmlElements = Array
      .from(document.getElementsByClassName('marked'));

    markedHtmlElements
      .forEach((el) => {
        this.unmarkHtmlElement(el);
      });

    const lettersToExchange = markedHtmlElements
      .map((el, ind) => {
        return this.getCharFromRackAt(ind);
      });

    const markedHtmlElementsInd = markedHtmlElements
      .map((el) => {
        return parseInt(el.parentElement.id, 10);
      });

    return {lettersToExchange: lettersToExchange, markedElementsInd: markedHtmlElementsInd};
  }

  private getCharFromRackAt(index: number): string {
    return this.boardService.getRack()[index].letter.character;
  }

  private unmarkHtmlElement(el: Element): void {
    el.classList.remove('marked');
  }

  private setNewLettersInPlace(slots, res): void {
    slots.forEach(ind => this.boardService.getRack()[ind].letter = new Letter);
    this.boardService.putLettersInRack(res.letters as string[]);
    this.changePassStatusFor('player1');
    addNewDefaultMessage(`Nowe litery: ${res.letters}`);
    // this.players.setScoreFor('player1', res.totalScore);
    // addNewDefaultMessage(`Koszt wymiany -${res.roundScore}pkt.`);
  }

  private changePassStatusFor(player: string): void {
    this.players[player].passed = !this.players[player].passed;
  }

  private handleBadMove(wordsDetails: IWordsDetail[]): void {
    wordsDetails
      .filter(el => !el.valid)
      .forEach(el => addNewDefaultMessage(`Słowo ${el.word.toUpperCase()} nie znajduje się w słowniku.`));
    this.boardService.reverseBoard();
  }

  private handleGoodMove(res: IResFromBoard): void {
    res.wordsDetails.forEach(el =>
      addNewDefaultMessage(`Nowe słowo ${el.word.toUpperCase()} za ${el.points}pkt`)
    );

    addNewSuccessMessage(`WYNIK RUNDY: ${res.roundScore}pkt`);

    this.players.setScoreFor('player1', res.totalScore);
    this.boardService.disableLettersOnBoard();

    const numberOfLettersToDraw = environment.maxNumberOfLettersOnRack - this.boardService.countLettersOnRack();
    this.gameService.drawLetters(numberOfLettersToDraw)
      .subscribe((resp: ILetters) =>
          this.boardService.putLettersInRack(resp.letters),
        err => {
          console.log(err);
          addNewErrorMessage(Messages.connectionFailed);
        }
      );
  }
}
