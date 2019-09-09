import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenRegistrationProcessCompleteComponent } from './citizen-registration-process-complete.component';

describe('CitizenRegistrationProcessCompleteComponent', () => {
  let component: CitizenRegistrationProcessCompleteComponent;
  let fixture: ComponentFixture<CitizenRegistrationProcessCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenRegistrationProcessCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenRegistrationProcessCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
