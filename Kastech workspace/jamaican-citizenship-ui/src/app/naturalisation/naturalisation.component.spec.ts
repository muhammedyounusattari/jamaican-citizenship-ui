import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalisationComponent } from './naturalisation.component';

describe('NaturalisationComponent', () => {
  let component: NaturalisationComponent;
  let fixture: ComponentFixture<NaturalisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
