import {Letter} from './letter';

export class Slot {
  coordinates: string;
  fieldClass = 'bcg';
  letter: Letter;

  constructor(coordinates: string, fieldClass: string = '') {
    this.coordinates = coordinates;
    this.fieldClass = `${this.fieldClass} ${fieldClass}`;
    this.letter = new Letter();
  }
}
