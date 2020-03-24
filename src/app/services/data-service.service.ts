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
    new Player(3,'Novica Veličković',12,'https://tinyurl.com/qubwo8r',this.bio.biographiesPlayers[3]),
    new Player(4,'Janis Peiners',31,'https://tinyurl.com/w8pjama',this.bio.biographiesPlayers[3]),
    new Player(5,'Rade Zagorac',3,'https://tinyurl.com/rmxx256',this.bio.biographiesPlayers[3]),
    new Player(6,'Corey Walden',2,'https://tinyurl.com/rqu88j8',this.bio.biographiesPlayers[3]),
    new Player(7,'Marcus Paige',5,'https://tinyurl.com/v4wups8',this.bio.biographiesPlayers[3]),
    new Player(8,'James McAdoo',8,'https://tinyurl.com/vsbgzh5',this.bio.biographiesPlayers[3]),
    new Player(9,'Nemanja Gordić',7,'https://tinyurl.com/ro3dz72',this.bio.biographiesPlayers[3]),
    new Player(10,'Braian Angola',0,'https://tinyurl.com/uu8rt2x',this.bio.biographiesPlayers[3]),
    new Player(11,'Nikola Janković',21,'https://tinyurl.com/rpq3pkw',this.bio.biographiesPlayers[3]),
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
