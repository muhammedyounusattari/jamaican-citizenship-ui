import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDeskClerkProcessComponent } from './local-desk-clerk-process.component';

describe('LocalDeskClerkProcessComponent', () => {
  let component: LocalDeskClerkProcessComponent;
  let fixture: ComponentFixture<LocalDeskClerkProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalDeskClerkProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalDeskClerkProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
