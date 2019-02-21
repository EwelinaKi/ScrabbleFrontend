import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {GameService} from './game.service';
import {BoardService} from './board.service';
import {PlayerService} from './player.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers: [GameService, BoardService, PlayerService]
})
export class ServicesModule {
}
