export interface IResFromBoard {
  roundScore: number;
  totalScore: number;
  wordsDetails: IWordsDetail[];
}

export interface IResLetters {
  letters: string[];
}

export interface IWordsDetail {
  valid: boolean;
  word: string;
  points: number;
}

export interface IBoard {
  board: ILetter[];
}

export interface ILetter {
  cellIndex: string;
  letter: string;
}
