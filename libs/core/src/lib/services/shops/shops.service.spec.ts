import { TestBed } from '@angular/core/testing';

import { ShopsService } from './shops.service';
import { provideHttpClient } from '@angular/common/http';

describe('ShopsService', () => {
  let service: ShopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient()] });
    service = TestBed.inject(ShopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
