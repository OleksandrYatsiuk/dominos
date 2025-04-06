import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { PaginationResponse, PromotionView, QueryPagination } from '../../interfaces/index';
import { convertQueryParams } from '../../utils/http.utils';

@Injectable({ providedIn: 'root' })
export class PromotionsService {
  http = inject(HttpClient);

  fetchPromotions(query?: QueryPagination) {
    const options = {
      params: convertQueryParams(query)
    }
    return this.http.get<PaginationResponse<PromotionView>>('/promotions', options);
  }
}
