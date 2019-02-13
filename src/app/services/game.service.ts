import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  // TODO replace backend server address
  baseUrl = 'assets/data/';

  constructor(private http: HttpClient) {
  }

  // TODO obsluzyc zwrot liter/ domyslnie zwracac pusta tablice
  drawLetters(): Observable<any> {

    return this.http.get(this.baseUrl + 'letters.json')
      .pipe(
        catchError(this.handleError)
      );
  }

  validateMove(bodyBoard: {}): Observable<any> {
    return this.http.post(this.baseUrl + 'letters.json', bodyBoard)
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
