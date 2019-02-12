import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopComponent} from './top/top.component';
import {MainComponent} from './main/main.component';
import {GameModule} from './game/game.module';
import {ServicesModule} from './services/services.module';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameModule,
    ServicesModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
