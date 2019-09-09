import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenRegistrationProcess4Component } from './citizen-registration-process4.component';

describe('CitizenRegistrationProcess4Component', () => {
  let component: CitizenRegistrationProcess4Component;
  let fixture: ComponentFixture<CitizenRegistrationProcess4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenRegistrationProcess4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenRegistrationProcess4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
