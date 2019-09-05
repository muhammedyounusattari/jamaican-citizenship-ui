import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageApplicationComponent } from './marriage-application.component';

describe('MarriageApplicationComponent', () => {
  let component: MarriageApplicationComponent;
  let fixture: ComponentFixture<MarriageApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriageApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
