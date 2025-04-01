import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserView } from '../../interfaces/index';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(readonly http: HttpClient) { }

    fetchProfile() {
        return this.http.get<UserView>('/user/current');
    }

    logout() {
        return this.http.post<void>('/user/logout', {});
    }
}
