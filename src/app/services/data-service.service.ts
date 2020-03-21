import { Injectable } from '@angular/core';
import {Player} from "../model/player.model";
import {Coach} from "../model/coach.model";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  biography : string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  private players : Player[] = [ 
    new Player(0,'Ognjen Jaramaz',10,'https://tinyurl.com/usqb8my',this.biography),
    new Player(1,'Rashawn Thomas',25,'https://tinyurl.com/w9jwrv8',this.biography),
    new Player(2,'William Mosley',42,'https://tinyurl.com/w9cy8xw',this.biography),
    new Player(3,'Janis Peiners',31,'https://tinyurl.com/w8pjama',this.biography),
  ]

  private coaches : Coach[] = [
    new Coach(0,'Andrea Trinchieri','Head Coach','https://tinyurl.com/yx3mg2f3',this.biography),
    new Coach(1,'Vlado Scepanovic','Assistant Coach','https://tinyurl.com/rwt3ja6',this.biography),
  ]

  returnAllPlayers() {
    return this.players.slice();
  }

  returnAllCoaches() {
    return this.coaches.slice();
  }

  getSelectedCoach(id: number) {
    return this.coaches[id];
  }

  getSelectedPlayer(id: number) {
    return this.players[id];
  }

  constructor() { }
}
