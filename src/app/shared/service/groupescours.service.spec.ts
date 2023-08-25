import { TestBed } from '@angular/core/testing';

import { GroupescoursService } from './groupescours.service';

describe('GroupescoursService', () => {
  let service: GroupescoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupescoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
