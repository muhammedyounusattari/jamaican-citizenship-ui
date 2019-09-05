import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageApplicationProcessTwoComponent } from './marriage-application-process-two.component';

describe('MarriageApplicationProcessTwoComponent', () => {
  let component: MarriageApplicationProcessTwoComponent;
  let fixture: ComponentFixture<MarriageApplicationProcessTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriageApplicationProcessTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageApplicationProcessTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
