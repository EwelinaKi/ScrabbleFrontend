import {Component, OnInit} from '@angular/core';
import {BoardService} from '../../services/board.service';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.css']
})
export class LettersComponent implements OnInit {

  constructor( public boardService: BoardService) {
  }

  ngOnInit() {
  }

  drop(event: DragEvent) {
    this.boardService.drop(event);
  }

  markLetter(event) {
    const targetId = event.target.parentElement.id;
    const targetImg = document.getElementById(targetId).children[0];
    if (targetImg.classList.contains('marked')) {
      targetImg.classList.remove('marked');
    } else {
      targetImg.classList.add('marked');
    }
  }
}
