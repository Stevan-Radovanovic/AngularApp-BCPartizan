import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachMainComponent } from './coach-main.component';

describe('CoachMainComponent', () => {
  let component: CoachMainComponent;
  let fixture: ComponentFixture<CoachMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
