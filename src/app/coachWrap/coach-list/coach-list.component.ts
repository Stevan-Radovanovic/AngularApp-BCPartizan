import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Coach } from 'src/app/model/coach.model';

@Component({
  selector: 'app-coach-list',
  templateUrl: './coach-list.component.html',
  styleUrls: ['./coach-list.component.css']
})
export class CoachListComponent implements OnInit {

  coaches : Coach[];

  constructor(private dataService: DataServiceService) {
    this.coaches = dataService.returnAllCoaches();
   }

  ngOnInit(): void {
  }

}
