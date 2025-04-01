import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile/profile.service';

export const authGuardFn = () => {
    const profileService = inject(ProfileService);
    const router = inject(Router);

    if (!profileService.isAuthenticated()) {
        router.navigate(['/auth/login']);
    }
    return profileService.isAuthenticated();
};
