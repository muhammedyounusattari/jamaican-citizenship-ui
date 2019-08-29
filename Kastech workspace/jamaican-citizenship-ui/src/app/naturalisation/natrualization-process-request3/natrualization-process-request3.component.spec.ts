import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatrualizationProcessRequest3Component } from './natrualization-process-request3.component';

describe('NatrualizationProcessRequest3Component', () => {
  let component: NatrualizationProcessRequest3Component;
  let fixture: ComponentFixture<NatrualizationProcessRequest3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatrualizationProcessRequest3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatrualizationProcessRequest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
