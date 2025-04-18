import { TestBed } from '@angular/core/testing';

import { PromotionsService } from './promotions.service';
import { provideHttpClient } from '@angular/common/http';

describe('PromotionsService', () => {
  let service: PromotionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient()] });
    service = TestBed.inject(PromotionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
