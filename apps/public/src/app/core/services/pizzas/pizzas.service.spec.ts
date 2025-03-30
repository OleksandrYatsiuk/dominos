import { TestBed } from '@angular/core/testing';

import { PizzasApiService } from './pizzas.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('PizzasApiService', () => {
  let service: PizzasApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withInterceptorsFromDi())]
    });
    service = TestBed.inject(PizzasApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
