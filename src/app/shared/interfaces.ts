export interface IResFromBoard {
  roundScore: number;
  totalScore: number;
  wordsDetails: IWordsDetail[];
}

export interface IWordsDetail {
  valid: boolean;
  word: string;
  points: number;
}
