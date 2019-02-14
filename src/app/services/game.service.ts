import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

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

  // TODO obsluzyc zwrot liter/ domyslnie zwracac pusta tablice
  // drawLetters(): Observable<any> {
  //   return this.http.get(this.baseUrl + 'draw')
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  drawLetters() {
    return this.http.get(this.baseUrl + 'draw');
  }

  exchangeLetters(letters) {
    return this.http.post(this.baseUrl + 'draw', letters);

  }

  validateMove(bodyBoard: {}): Observable<any> {
    return this.http.post(this.baseUrl + 'board', bodyBoard, )
      .pipe(
        catchError(this.handleError)
      );
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
