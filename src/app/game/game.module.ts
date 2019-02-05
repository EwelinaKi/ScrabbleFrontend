import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { BoardComponent } from './board/board.component';
import { LettersComponent } from './letters/letters.component';
import { ControlComponent } from './control/control.component';

@NgModule({
  declarations: [GameComponent, BoardComponent, LettersComponent, ControlComponent],
  imports: [
    CommonModule
  ],
  exports: [GameComponent],
  // entryComponents: [GameComponent]
})
export class GameModule { }
