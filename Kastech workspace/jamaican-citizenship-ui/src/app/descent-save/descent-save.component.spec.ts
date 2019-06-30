import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescentSaveComponent } from './descent-save.component';

describe('DescentSaveComponent', () => {
  let component: DescentSaveComponent;
  let fixture: ComponentFixture<DescentSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescentSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescentSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
