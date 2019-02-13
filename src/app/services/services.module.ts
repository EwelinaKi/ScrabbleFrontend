import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {GameService} from './game.service';
import {BoardService} from './board.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers: [GameService, BoardService]
})
export class ServicesModule {
}
