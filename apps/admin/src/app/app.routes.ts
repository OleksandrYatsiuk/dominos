import { Route } from '@angular/router';
import { LoginComponent } from './features/auth/components/login/login.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: '**',
        redirectTo: '/',
    }
];
