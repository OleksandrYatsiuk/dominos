import { TestBed } from '@angular/core/testing';

import { DrinksService } from './drinks.service';
import { provideHttpClient } from '@angular/common/http';

describe('DrinksService', () => {
  let service: DrinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient()] });
    service = TestBed.inject(DrinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
