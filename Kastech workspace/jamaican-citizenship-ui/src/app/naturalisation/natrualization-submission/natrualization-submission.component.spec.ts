import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatrualizationSubmissionComponent } from './natrualization-submission.component';

describe('NatrualizationSubmissionComponent', () => {
  let component: NatrualizationSubmissionComponent;
  let fixture: ComponentFixture<NatrualizationSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatrualizationSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatrualizationSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
