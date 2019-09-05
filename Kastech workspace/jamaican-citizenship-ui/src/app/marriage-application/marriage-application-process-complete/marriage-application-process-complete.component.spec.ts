import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageApplicationProcessCompleteComponent } from './marriage-application-process-complete.component';

describe('MarriageApplicationProcessCompleteComponent', () => {
  let component: MarriageApplicationProcessCompleteComponent;
  let fixture: ComponentFixture<MarriageApplicationProcessCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriageApplicationProcessCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageApplicationProcessCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
