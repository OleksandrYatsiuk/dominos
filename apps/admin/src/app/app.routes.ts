import { Route } from '@angular/router';
import { authGuardFn } from './core/guards/auth.guard';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('./layouts/main/main.routes'),
        canActivate: [authGuardFn],
    },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes'),
    },
    {
        path: '**',
        redirectTo: '/',
    }
];
