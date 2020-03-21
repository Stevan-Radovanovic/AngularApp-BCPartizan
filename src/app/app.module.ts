import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DefaultLeftComponent } from './default/default-left/default-left.component';
import { DefaultRightComponent } from './default/default-right/default-right.component';
import { FooterComponent } from './footer/footer.component';
import { CoachMainComponent } from './coachWrap/coach-main/coach-main.component';
import { CoachListComponent } from './coachWrap/coach-list/coach-list.component';
import { CoachDetailComponent } from './coachWrap/coach-detail/coach-detail.component';
import { PlayerMainComponent } from './playerWrap/player-main/player-main.component';
import { PlayerListComponent } from './playerWrap/player-list/player-list.component';
import { PlayerDetailComponent } from './playerWrap/player-detail/player-detail.component';
import { DefaultWrapComponent } from './default/default-wrap/default-wrap.component';
import { AppRouterModule } from './app-router.module';
import { PlayerDefaultDetailComponent } from './playerWrap/player-default-detail/player-default-detail.component';
import { CoachDefaultDetailComponent } from './coachWrap/coach-default-detail/coach-default-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactMainComponent } from './contact/contact-main/contact-main.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DefaultLeftComponent,
    DefaultRightComponent,
    FooterComponent,
    CoachMainComponent,
    CoachListComponent,
    CoachDetailComponent,
    PlayerMainComponent,
    PlayerListComponent,
    PlayerDetailComponent,
    DefaultWrapComponent,
    PlayerDefaultDetailComponent,
    CoachDefaultDetailComponent,
    PageNotFoundComponent,
    ContactMainComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
