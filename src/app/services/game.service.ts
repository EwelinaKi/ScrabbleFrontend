import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBoard, IResFromBoard, IResLetters} from '../shared/interfaces';


@Injectable({
  providedIn: 'root',
})
export class GameService {

  baseUrl = 'http://localhost:8080/scrabble/';

  constructor(private http: HttpClient) {
  }

  drawSetOfLetters() {
    return this.http.get(this.baseUrl + 'draw');
  }

  drawLetters(number: number) {
    return this.http.get(this.baseUrl + 'draw', {params: {draw: number.toString()}});
  }

  exchangeLetters(letters: string[]) {
    return this.http.post(this.baseUrl + 'draw', letters);
  }

  // drawSetOfLetters(): Observable<IResLetters> {
  //   return this.http.get<IResLetters>(this.baseUrl + 'draw');
  // }
  //
  // drawLetters(number: number): Observable<IResLetters> {
  //   return this.http.get<IResLetters>(this.baseUrl + 'draw', {params: {draw: number.toString()}});
  // }
  //
  // exchangeLetters(letters: string[]): Observable<IResLetters> {
  //   return this.http.post<IResLetters>(this.baseUrl + 'draw', letters);
  // }

  validateMove(bodyBoard: IBoard): Observable<IResFromBoard> {
    return this.http.post<IResFromBoard>(this.baseUrl + 'board', bodyBoard);
  }
}
