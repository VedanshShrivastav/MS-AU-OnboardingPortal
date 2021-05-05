import { TestBed } from '@angular/core/testing';

import { AccoliteDetailService } from './accolite-detail.service';

describe('AccoliteDetailService', () => {
  let service: AccoliteDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccoliteDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
