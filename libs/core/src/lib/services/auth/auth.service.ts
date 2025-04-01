import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthLoginBody, AuthLoginResponse } from '../../interfaces/index';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(readonly http: HttpClient) { }

  login(body: AuthLoginBody) {
    return this.http.post<AuthLoginResponse>('/auth/login', body);
  }
}
