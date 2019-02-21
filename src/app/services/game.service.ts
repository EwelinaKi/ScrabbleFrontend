import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {IBoard, IResFromBoard, ILetters} from '../shared/interfaces';


@Injectable({
  providedIn: 'root',
})
export class GameService {

  constructor(private http: HttpClient) {
  }

  drawSetOfLetters(): Observable<ILetters> {
    return this.http.get<ILetters>(environment.apiEndpoint + 'draw');
  }

  drawLetters(number: number): Observable<ILetters> {
    return this.http.get<ILetters>(environment.apiEndpoint + 'draw', {params: {draw: number.toString()}});
  }

  exchangeLetters(letters: string[]): Observable<ILetters> {
    return this.http.post<ILetters>(environment.apiEndpoint + 'draw', letters);
  }

  validateMove(bodyBoard: IBoard): Observable<IResFromBoard> {
    return this.http.post<IResFromBoard>(environment.apiEndpoint + 'board', bodyBoard);
  }

  restartGame() {
    return this.http.get(environment.apiEndpoint + 'restart');
  }
}
