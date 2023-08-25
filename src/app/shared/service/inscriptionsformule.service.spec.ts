import { TestBed } from '@angular/core/testing';

import { InscriptionsformuleService } from './inscriptionsformule.service';

describe('InscriptionsformuleService', () => {
  let service: InscriptionsformuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscriptionsformuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
