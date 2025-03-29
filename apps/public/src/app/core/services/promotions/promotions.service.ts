import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginationResponse } from '../../interfaces/core.interface';
import { PromotionView } from '../../interfaces/promotions.interface';

@Injectable({ providedIn: 'root' })
export class PromotionsApiService {
  constructor(readonly http: HttpClient) { }

  private apiUrl = 'https://dominos-lije.onrender.com';


  fetchPromotionsList() {
    return this.http.get<PaginationResponse<PromotionView>>(`${this.apiUrl}/public/promotions`);
  }
}
