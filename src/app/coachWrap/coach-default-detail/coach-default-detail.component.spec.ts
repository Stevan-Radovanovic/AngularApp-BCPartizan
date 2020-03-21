import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachDefaultDetailComponent } from './coach-default-detail.component';

describe('CoachDefaultDetailComponent', () => {
  let component: CoachDefaultDetailComponent;
  let fixture: ComponentFixture<CoachDefaultDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachDefaultDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachDefaultDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
