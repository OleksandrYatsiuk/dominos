import { inject, Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UserService, UserView } from '@dominos/core';
import { of, tap } from 'rxjs';
import { FetchProfile, Logout } from './profile.actions';
import { ProfileService } from '../../services/profile/profile.service';
import { Router } from '@angular/router';

interface ProfileStateModel {
    profile: UserView | null;
}

@State<ProfileStateModel>({
    name: 'profile',
    defaults: {
        profile: null,
    }
})
@Injectable()
export class ProfileState {
    private profileService = inject(ProfileService);
    private router = inject(Router);
    constructor(private profileApiService: UserService) { }

    @Selector()
    static profile(state: ProfileStateModel) {
        return state.profile;
    }

    @Action(FetchProfile)
    getProfileData(ctx: StateContext<ProfileStateModel>) {
        return this.profileApiService.fetchProfile().pipe(tap((profile) => ctx.patchState({ profile })));
    }

    @Action(Logout)
    logout(ctx: StateContext<ProfileStateModel>) {
        const request$ = this.profileService.isAuthenticated() ? this.profileApiService.logout() : of(undefined);
        return request$.pipe(tap(() => {
            this.profileService.updateSettings({ accessToken: null });
            ctx.patchState({ profile: null });
            this.router.navigate(['/auth/login']);
        }));
    }
}