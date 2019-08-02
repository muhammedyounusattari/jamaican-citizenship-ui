import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualApointmentConfirmationComponent } from './individual-apointment-confirmation.component';

describe('IndividualApointmentConfirmationComponent', () => {
  let component: IndividualApointmentConfirmationComponent;
  let fixture: ComponentFixture<IndividualApointmentConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualApointmentConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualApointmentConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
