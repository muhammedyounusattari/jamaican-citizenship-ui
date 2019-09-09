import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenRegistrationProcess3Component } from './citizen-registration-process3.component';

describe('CitizenRegistrationProcess3Component', () => {
  let component: CitizenRegistrationProcess3Component;
  let fixture: ComponentFixture<CitizenRegistrationProcess3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenRegistrationProcess3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenRegistrationProcess3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
