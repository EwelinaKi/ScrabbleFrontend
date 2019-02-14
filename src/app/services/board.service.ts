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
      a: 'A.png',
      ą: 'AA.png',
      b: 'B.png',
      c: 'C.png',
      ć: 'CC.png',
      d: 'D.png',
      e: 'E.png',
      ę: 'EE.png',
      f: 'F.png',
      g: 'G.png',
      h: 'H.png',
      i: 'I.png',
      j: 'J.png',
      k: 'K.png',
      l: 'L.png',
      ł: 'LL.png',
      m: 'M.png',
      n: 'N.png',
      ń: 'NN.png',
      o: 'O.png',
      ó: 'OO.png',
      p: 'P.png',
      r: 'R.png',
      s: 'S.png',
      ś: 'SS.png',
      t: 'T.png',
      u: 'U.png',
      w: 'W.png',
      y: 'Y.png',
      z: 'Z.png',
      ż: 'ZZ.png',
      ź: 'ZZZ.png',
}

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

  displayLettersInRack(letters: any) {
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
}
