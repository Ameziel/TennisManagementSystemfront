import { TestBed } from '@angular/core/testing';

import { PrestationscoursService } from './prestationscours.service';

describe('PrestationscoursService', () => {
  let service: PrestationscoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestationscoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
