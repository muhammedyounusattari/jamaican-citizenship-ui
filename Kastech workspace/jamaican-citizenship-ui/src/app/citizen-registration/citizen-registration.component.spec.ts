import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenRegistrationComponent } from './citizen-registration.component';

describe('CitizenRegistrationComponent', () => {
  let component: CitizenRegistrationComponent;
  let fixture: ComponentFixture<CitizenRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
