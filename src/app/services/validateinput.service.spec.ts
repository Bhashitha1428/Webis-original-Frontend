import { TestBed } from '@angular/core/testing';

import { ValidateinputService } from './validateinput.service';

describe('ValidateinputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidateinputService = TestBed.get(ValidateinputService);
    expect(service).toBeTruthy();
  });
});
