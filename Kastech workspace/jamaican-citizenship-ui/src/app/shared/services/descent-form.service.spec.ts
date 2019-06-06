import { TestBed } from '@angular/core/testing';

import { DescentFormService } from './descent-form.service';

describe('DescentFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DescentFormService = TestBed.get(DescentFormService);
    expect(service).toBeTruthy();
  });
});
