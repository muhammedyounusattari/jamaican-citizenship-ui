import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDailogComponentComponent } from './review-dailog-component.component';

describe('ReviewDailogComponentComponent', () => {
  let component: ReviewDailogComponentComponent;
  let fixture: ComponentFixture<ReviewDailogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewDailogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewDailogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
