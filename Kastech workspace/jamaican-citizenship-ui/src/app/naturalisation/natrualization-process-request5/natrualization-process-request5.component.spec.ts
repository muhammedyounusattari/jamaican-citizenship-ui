import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatrualizationProcessRequest5Component } from './natrualization-process-request5.component';

describe('NatrualizationProcessRequest5Component', () => {
  let component: NatrualizationProcessRequest5Component;
  let fixture: ComponentFixture<NatrualizationProcessRequest5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatrualizationProcessRequest5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatrualizationProcessRequest5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
