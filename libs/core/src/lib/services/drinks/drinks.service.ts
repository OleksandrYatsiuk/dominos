import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DrinkView, PaginationResponse, QueryPagination } from '../../interfaces/index';
import { convertQueryParams } from '../../utils/http.utils';

@Injectable({ providedIn: 'root' })
export class DrinksService {
  http = inject(HttpClient);

  fetchDrinks(params?: Partial<QueryPagination>) {
    const options = {
      params: convertQueryParams(params),
    }
    return this.http.get<PaginationResponse<DrinkView>>('/drinks', options);
  }
}
