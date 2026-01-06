import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GameComponent } from './game/game.component';
import { ContactComponent } from './contact/contact.component';
import { SportComponent } from './sport/sport.component';
import { LivecasinoComponent } from './livecasino/livecasino.component';
import { SlotgameComponent } from './slotgame/slotgame.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

const routers: Routes=[
  {path:"about",component:AboutComponent},
  {path:"game",component:GameComponent},
  {path:"contact",component:ContactComponent},
  {path:"sport",component:SportComponent},
  {path:"livecasino",component:LivecasinoComponent},
  {path:"slotgame",component:SlotgameComponent},
  {path:"**",component:HomeComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GameComponent,
    ContactComponent,
    SportComponent,
    LivecasinoComponent,
    SlotgameComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
