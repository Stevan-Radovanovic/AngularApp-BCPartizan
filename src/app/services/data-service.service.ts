import { Injectable } from '@angular/core';
import {Player} from "../model/player.model";
import {Coach} from "../model/coach.model";
import { BiographyService } from './biography.service';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private bio: BiographyService) { 
  }


  private players : Player[] = [ 
    new Player(0,'Ognjen Jaramaz',10,'https://tinyurl.com/usqb8my',this.bio.biographiesPlayers[0]),
    new Player(1,'Rashawn Thomas',25,'https://tinyurl.com/w9jwrv8',this.bio.biographiesPlayers[1]),
    new Player(2,'William Mosley',42,'https://tinyurl.com/w9cy8xw',this.bio.biographiesPlayers[2]),
    new Player(3,'Janis Peiners',31,'https://tinyurl.com/w8pjama',this.bio.biographiesPlayers[3]),
  ]

  private coaches : Coach[] = [
    new Coach(0,'Andrea Trinchieri','Head Coach','https://tinyurl.com/yx3mg2f3',this.bio.biographiesCoaches[0]),
    new Coach(1,'Vlado Scepanovic','Assistant Coach','https://tinyurl.com/rwt3ja6',this.bio.biographiesCoaches[1])
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

}
