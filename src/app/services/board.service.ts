import {Injectable} from '@angular/core';
import {Slot} from '../game/slot';
import {Letter} from '../game/letter';


@Injectable({
  providedIn: 'root'
})
export class BoardService {

  imgPath = 'assets/img/letters';
  board = [];
  rack = [];
  letterImages = {
      A: 'A.png',
      Ą: 'AA.png',
      B: 'B.png',
      C: 'C.png',
      Ć: 'CC.png',
      D: 'D.png',
      E: 'E.png',
      Ę: 'EE.png',
      F: 'F.png',
      G: 'G.png',
      H: 'H.png',
      I: 'I.png',
      J: 'J.png',
      K: 'K.png',
      L: 'L.png',
      Ł: 'LL.png',
      M: 'M.png',
      N: 'N.png',
      Ń: 'NN.png',
      O: 'O.png',
      Ó: 'OO.png',
      P: 'P.png',
      R: 'R.png',
      S: 'S.png',
      Ś: 'SS.png',
      T: 'T.png',
      U: 'U.png',
      W: 'W.png',
      Y: 'Y.png',
      Z: 'Z.png',
      Ż: 'ZZ.png',
      Ź: 'ZZZ.png',
  };

  constructor() {
  }

  getBoard() {
    return this.board;
  }

  getRack() {
    return this.rack;
  }

  prepareRack() {
    for (let i = 0; i < 25; i++) {
      this.rack.push(new Slot(`${i}slot`, 'letter'));
    }
  }

  prepareBoard(boxesOnBoard: string[][]) {
    boxesOnBoard.forEach((array, row) => {
      array.forEach((element, col) => {
        this.board.push(new Slot((100 * row + col).toString(), element));
      });
    });
  }

  displayLettersInRack(letters: string[]) {
    letters.forEach(letter => {
      const slot = this.rack.find((obj) => !obj.letter.character);
      slot.letter = new Letter(letter, `${this.imgPath}/${this.letterImages[letter]}`);
    });
  }

  drop(event: DragEvent) {
    const dragElement = this.searchElement(event['previousContainer'].id);
    const dropElement = this.searchElement(event['container'].id);

    // Switch elements between board and rack
    const tempLetter = this[dropElement.table][dropElement.idx].letter;
    this[dropElement.table][dropElement.idx].letter = this[dragElement.table][dragElement.idx].letter;
    this[dragElement.table][dragElement.idx].letter = tempLetter;
  }

  searchElement(ind: string) {
    const rackIdx = this.rack.findIndex(el => el.coordinates === ind);
    const boardIdx = this.board.findIndex(el => el.coordinates === ind);
    return rackIdx !== -1 ? {table: 'rack', idx: rackIdx} : {table: 'board', idx: boardIdx};
  }

  disableLettersOnBoard() {
    this.board.forEach(el => el.letter.disabled = true);
  }

  disableAllLetters() {
   this.disableLettersOnBoard();
    this.rack.forEach(el => el.letter.disabled = true);
  }
}
