import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  baseUrl = 'http://localhost:8080/scrabble/';

  constructor(private http: HttpClient) {
  }

  drawLetters(number?: number) {
    if (number) {
      return this.http.get(this.baseUrl + 'draw', {params: {draw: number.toString()}});
    } else {
      return this.http.get(this.baseUrl + 'draw');
    }
  }

  exchangeLetters(letters) {
    return this.http.post(this.baseUrl + 'draw', letters);
  }

  validateMove(bodyBoard) {
    return this.http.post(this.baseUrl + 'board', bodyBoard);
  }
}
