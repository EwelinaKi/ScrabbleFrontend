export interface IResFromBoard {
  roundScore: number;
  totalScore: number;
  wordsDetails: IWordsDetail[];
  user: string;
  actualBoard: IBoard;
  messages: string[];
}

export interface ILetters {
  letters: string[];
  totalScore: number;
  roundScore: number;
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
