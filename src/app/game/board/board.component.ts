import {Component, OnInit} from '@angular/core';
import {BoardService} from '../../services/board.service';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  classesForBoxesOnBoard =
    [
      ['word3', '', '', 'letter2', '', '', '', 'word3', '', '', '', 'letter2', '', '', 'word3'],
      ['', 'word2', '', '', '', 'letter3', '', '', '', 'letter3', '', '', '', 'word2', ''],
      ['', '', 'word2', '', '', '', 'letter2', '', 'letter2', '', '', '', 'word2', '', ''],
      ['letter2', '', '', 'word2', '', '', '', 'letter2', '', '', '', 'word2', '', '', 'letter2'],
      ['', '', '', '', 'word2', '', '', '', '', '', 'word2', '', '', '', ''],
      ['', 'letter3', '', '', '', 'letter3', '', '', '', 'letter3', '', '', '', 'letter3', ''],
      ['', '', 'letter2', '', '', '', 'letter2', '', 'letter2', '', '', '', 'letter2', '', ''],
      ['word3', '', '', 'letter2', '', '', '', 'middle', '', '', '', 'letter2', '', '', 'word3'],
      ['', '', 'letter2', '', '', '', 'letter2', '', 'letter2', '', '', '', 'letter2', '', ''],
      ['', 'letter3', '', '', '', 'letter3', '', '', '', 'letter3', '', '', '', 'letter3', ''],
      ['', '', '', '', 'word2', '', '', '', '', '', 'word2', '', '', '', ''],
      ['letter2', '', '', 'word2', '', '', '', 'letter2', '', '', '', 'word2', '', '', 'letter2'],
      ['', '', 'word2', '', '', '', 'letter2', '', 'letter2', '', '', '', 'word2', '', ''],
      ['', 'word2', '', '', '', 'letter3', '', '', '', 'letter3', '', '', '', 'word2', ''],
      ['word3', '', '', 'letter2', '', '', '', 'word3', '', '', '', 'letter2', '', '', 'word3'],
    ];

  constructor(private gameService: GameService, private boardService: BoardService) {
  }

  ngOnInit() {
    this.boardService.prepareBoard(this.classesForBoxesOnBoard);
  }

  drop(event: DragEvent) {
    this.boardService.drop(event);
  }
}
