import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageApplicationProcessThreeComponent } from './marriage-application-process-three.component';

describe('MarriageApplicationProcessThreeComponent', () => {
  let component: MarriageApplicationProcessThreeComponent;
  let fixture: ComponentFixture<MarriageApplicationProcessThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriageApplicationProcessThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageApplicationProcessThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
