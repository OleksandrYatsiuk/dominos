import { TestBed } from '@angular/core/testing';

import { PromotionsApiService } from './promotions.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('PromotionsApiService', () => {
  let service: PromotionsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withInterceptorsFromDi())]
    });
    service = TestBed.inject(PromotionsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
