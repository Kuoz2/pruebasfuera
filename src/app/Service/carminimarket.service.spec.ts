import { TestBed } from '@angular/core/testing';

import { CarminimarketService } from './carminimarket.service';

describe('CarminimarketService', () => {
  let service: CarminimarketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarminimarketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
