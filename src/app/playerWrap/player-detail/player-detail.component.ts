import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/model/player.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {

  selectedPlayer: Player = null;

  constructor(private route: ActivatedRoute, private dataService: DataServiceService, private router: Router) {
      
   }

  ngOnInit(): void {
    this.route.params.subscribe(
        () => {
          this.selectedPlayer = this.dataService.getSelectedPlayer(+this.route.snapshot.params.id);
          if(this.selectedPlayer===undefined || this.selectedPlayer===null) {
            this.router.navigate(['../pageNotFound'])
          }
        }
    )
    
  }

}
