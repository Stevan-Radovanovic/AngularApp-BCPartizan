import { Component, OnInit } from '@angular/core';
import { Coach } from 'src/app/model/coach.model';
import { DataServiceService } from 'src/app/services/data-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css']
})

export class CoachDetailComponent implements OnInit {

  selectedCoach: Coach = null;

  constructor(private dataService: DataServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      () => {
        this.selectedCoach = this.dataService.getSelectedCoach(+this.route.snapshot.params.id);
        if(this.selectedCoach===undefined || this.selectedCoach===null) {
          this.router.navigate(['../pageNotFound'])
        }
    }
    )
  }

}
