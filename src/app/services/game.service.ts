import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class GameService {

  // TODO replace backend server address
  baseUrl = 'http://localhost:8080/scrabble/';
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      })
  };

  constructor(private http: HttpClient) {
  }

  drawLetters(number?: number) {
    if (number) {
      return this.http.get(this.baseUrl + 'draw', {params: {draw: number.toString()}});
    } else {
      return this.http.get(this.baseUrl + 'draw');
    }
  }

  // drawNumberOfLetters() {
  //   //TODO
  //   return this.http.get(this.baseUrl + 'draw');
  // }

  exchangeLetters(letters) {
    return this.http.post(this.baseUrl + 'draw', letters);
  }

  validateMove(bodyBoard) {
    return this.http.post(this.baseUrl + 'board', bodyBoard);
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Node.js server error');
  }
}
