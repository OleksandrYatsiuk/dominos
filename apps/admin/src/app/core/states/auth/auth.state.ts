import { inject, Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AuthService } from '@dominos/core';
import { AuthLogin } from './auth.actions';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile/profile.service';

interface AuthStateModel {
    token: string | null;
    expiredAt: string | null;
}

@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        token: null,
        expiredAt: null,
    }
})
@Injectable()
export class AuthState {
    private router = inject(Router);
    private profileService = inject(ProfileService);
    constructor(private authApiService: AuthService) { }

    @Selector()
    static isAuthenticated(state: AuthStateModel) {
        return !!state.token;
    }

    @Action(AuthLogin)
    login(ctx: StateContext<AuthStateModel>, payload: AuthLogin) {
        return this.authApiService.login(payload.body).pipe(
            tap((response) => {
                this.profileService.updateSettings({ accessToken: response.token });
                ctx.patchState({ token: response.token, expiredAt: response.expiredAt });
                this.router.navigate(['/']);
            }),
        );
    }
}