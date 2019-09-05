import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageApplicationProcessFourComponent } from './marriage-application-process-four.component';

describe('MarriageApplicationProcessFourComponent', () => {
  let component: MarriageApplicationProcessFourComponent;
  let fixture: ComponentFixture<MarriageApplicationProcessFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriageApplicationProcessFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageApplicationProcessFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
