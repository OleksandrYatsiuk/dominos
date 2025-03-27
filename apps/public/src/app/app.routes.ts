import { Route } from '@angular/router';
import { HomeComponent } from './features/components/home.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: '**',
        redirectTo: '/'
    },
];
