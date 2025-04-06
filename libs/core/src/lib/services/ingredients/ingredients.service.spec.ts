import { TestBed } from '@angular/core/testing';

import { IngredientsService } from './ingredients.service';
import { provideHttpClient } from '@angular/common/http';

describe('IngredientsService', () => {
  let service: IngredientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient()] });
    service = TestBed.inject(IngredientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
