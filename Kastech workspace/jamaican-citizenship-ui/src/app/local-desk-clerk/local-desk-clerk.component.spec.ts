import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDeskClerkComponent } from './local-desk-clerk.component';

describe('LocalDeskClerkComponent', () => {
  let component: LocalDeskClerkComponent;
  let fixture: ComponentFixture<LocalDeskClerkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalDeskClerkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalDeskClerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
