import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenRegistrationProcecc2Component } from './citizen-registration-procecc2.component';

describe('CitizenRegistrationProcecc2Component', () => {
  let component: CitizenRegistrationProcecc2Component;
  let fixture: ComponentFixture<CitizenRegistrationProcecc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenRegistrationProcecc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenRegistrationProcecc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
