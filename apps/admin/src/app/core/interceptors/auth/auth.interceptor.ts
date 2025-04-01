import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const profileService = inject(ProfileService);
  const accessToken = profileService.get('accessToken');

  if (accessToken) {
    req = req.clone({ setHeaders: { authorization: `Bearer ${accessToken}` } });
  }
  return next(req);
};
