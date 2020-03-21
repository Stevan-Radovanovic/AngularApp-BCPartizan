import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDefaultDetailComponent } from './player-default-detail.component';

describe('PlayerDefaultDetailComponent', () => {
  let component: PlayerDefaultDetailComponent;
  let fixture: ComponentFixture<PlayerDefaultDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerDefaultDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDefaultDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
