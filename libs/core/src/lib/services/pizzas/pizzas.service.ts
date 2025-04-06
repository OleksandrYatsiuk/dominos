import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginationResponse, PizzaView, QueryPagination } from '../../interfaces/index';
import { convertQueryParams } from '../../utils/http.utils';

@Injectable({ providedIn: 'root' })
export class PizzasService {

  constructor(readonly http: HttpClient) { }

  fetchPizzas(query?: QueryPagination) {
    const options = { params: convertQueryParams(query) };
    return this.http.get<PaginationResponse<PizzaView>>('/pizzas', options);
  }
}
