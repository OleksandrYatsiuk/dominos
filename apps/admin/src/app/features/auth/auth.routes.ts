import { Route } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";

export default [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'forgot-password',
        loadComponent: () => import('./components/forgot-password/forgot-password.component').then((c) => c.ForgotPasswordComponent),
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/auth/login'
    }

] as Route[];