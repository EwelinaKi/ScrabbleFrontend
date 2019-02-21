import {Component, OnInit} from '@angular/core';
import {BoardService} from '../../services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(private boardService: BoardService) {
  }

  ngOnInit() {
  }

  drop(event: DragEvent) {
    this.boardService.drop(event);
  }
}
