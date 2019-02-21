import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopComponent} from './top/top.component';
import {MainComponent} from './main/main.component';
import {GameComponent} from './game/game.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'top',
    component: TopComponent
  },
  {
    path: 'game',
    component: GameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

