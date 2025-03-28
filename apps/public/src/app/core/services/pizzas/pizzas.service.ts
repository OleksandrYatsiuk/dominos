import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginationResponse } from '../../interfaces/core.interface';
import { PizzaView } from '../../interfaces/pizzas.interface';

@Injectable({ providedIn: 'root' })
export class PizzasApiService {
  constructor(readonly http: HttpClient) { }

  private apiUrl = 'https://dominos-lije.onrender.com';


  fetchPizzasList() {
    return this.http.get<PaginationResponse<PizzaView>>(`${this.apiUrl}/pizzas`);
  }
}
