export class Player {
  passed: boolean;
  score: number;

  constructor(passed: boolean = false, score: number = 0) {
    this.passed = passed;
    this.score = score;
  }

  pass() {
    this.passed = true;
  }

  revive() {
    this.passed = false;
  }

  reset() {
    this.score = 0;
    this.passed = false;
  }
}
