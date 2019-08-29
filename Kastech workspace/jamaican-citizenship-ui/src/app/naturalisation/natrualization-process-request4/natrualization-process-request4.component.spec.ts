import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatrualizationProcessRequest4Component } from './natrualization-process-request4.component';

describe('NatrualizationProcessRequest4Component', () => {
  let component: NatrualizationProcessRequest4Component;
  let fixture: ComponentFixture<NatrualizationProcessRequest4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatrualizationProcessRequest4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatrualizationProcessRequest4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
