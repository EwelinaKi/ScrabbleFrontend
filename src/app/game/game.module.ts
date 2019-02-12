import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { BoardComponent } from './board/board.component';
import { LettersComponent } from './letters/letters.component';
import { ControlComponent } from './control/control.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [GameComponent, BoardComponent, LettersComponent, ControlComponent],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [GameComponent],
  // entryComponents: [GameComponent]
})
export class GameModule { }
