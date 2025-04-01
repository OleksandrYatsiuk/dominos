import { Route } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';

export default [
    {
        path: '',
        component: ProfileComponent,
    },
    {
        path: 'password',
        loadComponent: () => import('./components/password/password.component').then((c) => c.PasswordComponent),
    }
] as Route[];