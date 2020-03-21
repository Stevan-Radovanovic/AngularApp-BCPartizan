import { Component, OnInit, Output } from '@angular/core';
import { Player } from 'src/app/model/player.model';
import { DataServiceService } from 'src/app/services/data-service.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players : Player[];
  

  constructor(private dataService: DataServiceService) { 
      this.players = dataService.returnAllPlayers();
  }
 
  ngOnInit(): void {
  }

}
