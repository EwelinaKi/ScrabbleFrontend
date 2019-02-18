import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBoard, IResFromBoard, ILetters} from '../shared/interfaces';


@Injectable({
  providedIn: 'root',
})
export class GameService {

  baseUrl = 'http://localhost:8080/scrabble/';

  constructor(private http: HttpClient) {
  }

  drawSetOfLetters(): Observable<ILetters> {
    return this.http.get<ILetters>(this.baseUrl + 'draw');
  }

  drawLetters(number: number): Observable<ILetters> {
    return this.http.get<ILetters>(this.baseUrl + 'draw', {params: {draw: number.toString()}});
  }

  exchangeLetters(letters: string[]): Observable<ILetters> {
    return this.http.post<ILetters>(this.baseUrl + 'draw', letters);
  }

  validateMove(bodyBoard: IBoard): Observable<IResFromBoard> {
    return this.http.post<IResFromBoard>(this.baseUrl + 'board', bodyBoard);
  }

  restartGame() {
    return this.http.get(this.baseUrl + 'restart');
  }
}
