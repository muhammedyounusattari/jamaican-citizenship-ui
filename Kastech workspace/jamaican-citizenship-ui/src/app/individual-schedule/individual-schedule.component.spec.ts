import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualScheduleComponent } from './individual-schedule.component';

describe('IndividualScheduleComponent', () => {
  let component: IndividualScheduleComponent;
  let fixture: ComponentFixture<IndividualScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
