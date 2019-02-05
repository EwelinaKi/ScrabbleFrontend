import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopComponent} from './top/top.component';
import { MainComponent } from './main/main.component';
import {GameModule} from './game/game.module';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
