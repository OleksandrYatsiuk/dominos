import { TestBed } from '@angular/core/testing';

import { PizzasService } from './pizzas.service';
import { provideHttpClient } from '@angular/common/http';

describe('PizzasService', () => {
  let service: PizzasService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient()] });
    service = TestBed.inject(PizzasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
