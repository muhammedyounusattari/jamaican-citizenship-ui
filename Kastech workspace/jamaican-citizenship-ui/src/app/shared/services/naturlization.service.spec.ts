import { TestBed } from '@angular/core/testing';

import { NaturlizationService } from './naturlization.service';

describe('NaturlizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NaturlizationService = TestBed.get(NaturlizationService);
    expect(service).toBeTruthy();
  });
});
