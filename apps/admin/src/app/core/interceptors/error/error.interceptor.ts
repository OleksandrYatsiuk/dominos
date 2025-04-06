import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, EMPTY, throwError } from 'rxjs';
import { Store } from '@ngxs/store';
import { Logout } from '../../states/profile/profile.actions';
import { ProfileService } from '../../services/profile/profile.service';

export const ErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const store = inject(Store);
  const profileService = inject(ProfileService);
  return next(req)
    .pipe(
      catchError((e: HttpErrorResponse) => {
        if (e.status === 401) {
          profileService.updateSettings({ accessToken: null });
          store.dispatch(new Logout());
          return EMPTY;
        }

        return throwError(() => e);
      })
    );
};
