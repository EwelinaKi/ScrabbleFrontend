import {Injectable} from '@angular/core';
import {Slot} from '../game/slot';
import {Letter} from '../game/letter';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  imgPath = 'assets/img/letters';
  board: Slot[] = [];
  rack: Slot[] = [];

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

  putLettersInRack(letters: string[]) {
    letters.forEach(letter => {
      const slot = this.rack.find((obj) => !obj.letter.character);
      slot.letter = new Letter(letter, `${this.imgPath}/${letter.charCodeAt(0)}.png`);
    });
  }

  countLettersOnRack(): number {
    return this.rack.reduce((prev, curr) => curr.letter.character !== null ? prev + 1 : prev, 0);
  }

  drop(event: DragEvent) {
    const dragElement = this.searchElement(event['previousContainer'].id);
    const dropElement = this.searchElement(event['container'].id);

    // Switch elements between board and rack
    if (!this[dropElement.table][dropElement.idx].letter.disabled) {
      const tempLetter = this[dropElement.table][dropElement.idx].letter;
      this[dropElement.table][dropElement.idx].letter = this[dragElement.table][dragElement.idx].letter;
      this[dragElement.table][dragElement.idx].letter = tempLetter;
    }
  }

  searchElement(ind: string) {
    const rackIdx = this.rack.findIndex(el => el.coordinates === ind);
    const boardIdx = this.board.findIndex(el => el.coordinates === ind);
    return rackIdx !== -1 ? {table: 'rack', idx: rackIdx} : {table: 'board', idx: boardIdx};
  }

  disableLettersOnBoard() {
    this.board.forEach(el => {
      if (el.letter.character) {
        el.letter.disabled = true;
      }
    });
  }

  disableAllLetters() {
    this.disableLettersOnBoard();
    this.rack.forEach(el => {
      if (el.letter.character) {
        el.letter.disabled = true;
      }
    });
  }

  reverseBoard() {
    this.board.forEach(el => {
      if (!el.letter.disabled) {
        const slot = this.rack.find((obj) => !obj.letter.character);
        slot.letter = el.letter;
        el.letter = new Letter();
      }
    });
  }
}
