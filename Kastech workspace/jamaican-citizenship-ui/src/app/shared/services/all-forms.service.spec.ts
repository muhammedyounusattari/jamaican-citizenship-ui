import { TestBed } from '@angular/core/testing';

import { AllFormsService } from './all-forms.service';

describe('AllFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllFormsService = TestBed.get(AllFormsService);
    expect(service).toBeTruthy();
  });
});
