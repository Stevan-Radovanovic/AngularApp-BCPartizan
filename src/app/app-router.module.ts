import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachMainComponent } from './coachWrap/coach-main/coach-main.component';
import { PlayerMainComponent } from './playerWrap/player-main/player-main.component';
import { DefaultWrapComponent } from './default/default-wrap/default-wrap.component';
import { PlayerDetailComponent } from './playerWrap/player-detail/player-detail.component';
import { PlayerDefaultDetailComponent } from './playerWrap/player-default-detail/player-default-detail.component';
import { CoachDetailComponent } from './coachWrap/coach-detail/coach-detail.component';
import { CoachDefaultDetailComponent } from './coachWrap/coach-default-detail/coach-default-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactMainComponent } from './contact/contact-main/contact-main.component';

const appRoutes: Routes = [
    {path: '', component: DefaultWrapComponent},
    { path: 'coaches', component: CoachMainComponent, children: [
      {path: '', component: CoachDefaultDetailComponent},
      {path: ':id', component: CoachDetailComponent}
    ]},

    { path: 'players', component: PlayerMainComponent, children:[ 
      {path: '', component: PlayerDefaultDetailComponent},
      {path: ':id', component: PlayerDetailComponent}
    ]},

    {path: 'contact', component: ContactMainComponent},

    {path:'pageNotFound', component: PageNotFoundComponent},
    {path:'**', redirectTo: 'pageNotFound'}
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
      )
    ],
    exports: [
        RouterModule
    ]
  })
  export class AppRouterModule { }