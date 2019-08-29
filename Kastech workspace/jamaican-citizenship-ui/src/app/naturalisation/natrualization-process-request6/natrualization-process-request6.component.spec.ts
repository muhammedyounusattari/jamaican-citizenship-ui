import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatrualizationProcessRequest6Component } from './natrualization-process-request6.component';

describe('NatrualizationProcessRequest6Component', () => {
  let component: NatrualizationProcessRequest6Component;
  let fixture: ComponentFixture<NatrualizationProcessRequest6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatrualizationProcessRequest6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatrualizationProcessRequest6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
