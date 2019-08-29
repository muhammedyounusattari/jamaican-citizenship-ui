import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatrualizationProcessRequest2Component } from './natrualization-process-request2.component';

describe('NatrualizationProcessRequest2Component', () => {
  let component: NatrualizationProcessRequest2Component;
  let fixture: ComponentFixture<NatrualizationProcessRequest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatrualizationProcessRequest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatrualizationProcessRequest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
