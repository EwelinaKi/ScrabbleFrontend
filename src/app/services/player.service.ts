import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  isOngoingGame = false;
  players = {};

  constructor() {
  }

  addPlayer(playerName: string): void {
    this.players[playerName] = new Player();
  }

  removePlayer(playerName: string): void {
    delete this.players[playerName];
  }

  pass(playerName: string): void {
    this.players[playerName].passed = true;
  }

  revive(playerName: string): void {
    this.players[playerName].passed = false;
  }

  reset(playerName: string): void {
    this.players[playerName].score = 0;
    this.players[playerName].passed = false;
  }

  setScoreFor(playerName: string, score: number) {
    this.players[playerName].score = score;
  }

  checkPassedState(playerName: string): boolean {
    return this.players[playerName].passed;
  }

  getScore(playerName: string): number {
    return this.players[playerName].score;
  }

  clearAllPlayers(): void {
    this.players = {};
  }

  startOngoingGame(): void {
    this.isOngoingGame = true;
  }

  stopOngoingGame(): void {
    this.isOngoingGame = false;
  }

  checkOngoingGame(): boolean {
    return this.isOngoingGame;
  }
}

class Player {
  passed: boolean;
  score: number;

  constructor(passed: boolean = false, score: number = 0) {
    this.passed = passed;
    this.score = score;
  }
}
