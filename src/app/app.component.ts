import {Component, OnInit} from '@angular/core';
import {GameService} from './services/game.service';
import {BoardService} from './services/board.service';
import {ILetters} from './shared/interfaces';
import {addNewSuccessMessage, cleanReports} from './game/control/control.message.provider';
import {PlayerService} from './services/player.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading = false;

  constructor(
    private gameService: GameService,
    private boardService: BoardService,
    private players: PlayerService,
    private router: Router
    ) {
  }

  ngOnInit() {
    this.boardService.prepareBoard();
    this.boardService.prepareRack();
  }

  startGame() {
    this.loading = true;
    this.players.clearAllPlayers();
    this.players.addPlayer('player1');
    this.gameService.restartGame()
      .subscribe(() => {
          this.loading = false;
          this.boardService.resetBoard();
          this.boardService.resetRack();
          this.players.startOngoingGame();
          this.gameService.drawSetOfLetters()
            .subscribe((letters: ILetters) => {
              this.boardService.putLettersInRack(letters.letters);
            });
          this.router.navigate(['game']).then(() => {
            cleanReports();
            addNewSuccessMessage('Nowa gra rozpoczęta');
          });
        },
        err => {
          this.loading = false;
          console.log(err);
        });
  }
}
