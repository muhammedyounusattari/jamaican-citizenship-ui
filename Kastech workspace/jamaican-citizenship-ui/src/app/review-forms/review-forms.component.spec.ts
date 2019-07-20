import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewFormsComponent } from './review-forms.component';

describe('ReviewFormsComponent', () => {
  let component: ReviewFormsComponent;
  let fixture: ComponentFixture<ReviewFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
