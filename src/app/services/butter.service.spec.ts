import { TestBed } from '@angular/core/testing';

import { ButterService } from './butter.service';

describe('ButterService', () => {
  let service: ButterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
