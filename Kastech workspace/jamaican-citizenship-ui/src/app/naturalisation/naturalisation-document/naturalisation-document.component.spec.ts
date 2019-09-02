import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalisationDocumentComponent } from './naturalisation-document.component';

describe('NaturalisationDocumentComponent', () => {
  let component: NaturalisationDocumentComponent;
  let fixture: ComponentFixture<NaturalisationDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalisationDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalisationDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
