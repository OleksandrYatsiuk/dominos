import { TestBed } from '@angular/core/testing';

import { PromotionsApiService } from './promotions.service';

describe('PromotionsApiService', () => {
  let service: PromotionsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromotionsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
