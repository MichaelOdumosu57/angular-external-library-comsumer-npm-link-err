import { TestBed } from '@angular/core/testing';

import { ErrorMyLibService } from './error-my-lib.service';

describe('ErrorMyLibService', () => {
  let service: ErrorMyLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorMyLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
