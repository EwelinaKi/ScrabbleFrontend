export class Letter {
  character: string;
  url: string;
  disabled =  false;

  constructor(character: string = null, url: string = null) {
    this.character = character;
    this.url = url;
  }
}
