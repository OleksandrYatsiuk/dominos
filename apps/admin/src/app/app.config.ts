import {
  ApplicationConfig, provideZoneChangeDetection, isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngxs/store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { withNgxsLoggerPlugin } from '@ngxs/logger-plugin';
import { provideI18nTranslations, ApiUrlInterceptor } from '@dominos/core';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { appRoutes } from './app.routes';
import { AuthState } from './core/states/auth/auth.state';
import { AuthInterceptor } from './core/interceptors/auth/auth.interceptor';
import { ErrorInterceptor } from './core/interceptors/error/error.interceptor';
import { providePrimeNG } from 'primeng/config';
import Theme from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withInterceptorsFromDi(), withInterceptors([ApiUrlInterceptor, AuthInterceptor, ErrorInterceptor])),
    provideI18nTranslations('/18in'),
    provideStore([AuthState]),
    withNgxsLoggerPlugin({ disabled: !isDevMode() }),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Theme,
        options: {
          darkModeSelector: false,
        }
      }
    })
  ],
};
