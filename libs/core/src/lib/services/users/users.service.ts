import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { convertQueryParams } from '../../utils/http.utils';
import { PaginationResponse, QueryPagination, UserView } from '../../interfaces/index';

@Injectable({ providedIn: 'root' })
export class UsersService {
  http = inject(HttpClient);

  fetchUsers(params?: QueryPagination) {
    const options = { params: convertQueryParams(params) };
    return this.http.get<PaginationResponse<UserView>>('/users-management', options);
  }
}
